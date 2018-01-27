import { handleErrors, myFetch } from "../utils";

const handleReposResponses = ([reposTpl, reposData]) => {
  const template = reposTpl({ repos: reposData });

  $("#view").append(template);
  $("#reposTable").DataTable({
    order: [[1, "desc"]]
  });
  document.querySelector("#reposTable tbody").addEventListener(
    "click",
    e => {
      e.preventDefault();

      const { fullname, user } = e.srcElement.parentElement.dataset;
      location.hash = `#/user/${fullname}`;
    },
    false
  );
};

const handleUserResponses = ([userTpl, userData]) => {
  const template = userTpl(userData);
  $("#view").empty();
  $("#view").append(template);

  const repos = userData.repos_url;
  Promise.all([
    import("../../tpl/userReposList.hbs"),
    myFetch(repos).then(resp => resp.json())
  ])
    .then(handleReposResponses)
    .catch(handleErrors);
};

export default user => {
  Promise.all([
    import("../../tpl/userCard.hbs"),
    myFetch(`https://api.github.com/users/${user}`).then(resp => resp.json())
  ])
    .then(handleUserResponses)
    .catch(handleErrors);
};
