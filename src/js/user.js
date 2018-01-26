const handleReposResponses = ([reposTable, reposData]) => {
  const template = Handlebars.compile(reposTable)({
    repos: reposData
  });

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

const handleUserResponses = ([card, userDetail]) => {
  const template = Handlebars.compile(card)(userDetail);
  $("#view").empty();
  $("#view").append(template);

  const repos = userDetail.repos_url;
  Promise.all([
    myFetch("tpl/userReposList.html").then(resp => resp.text()),
    myFetch(repos).then(resp => resp.json())
  ])
    .then(handleReposResponses)
    .catch(handleErrors);
};

const UserHandler = user => {
  Promise.all([
    myFetch("tpl/userCard.html").then(resp => resp && resp.text()),
    myFetch(`https://api.github.com/users/${user}`).then(
      resp => resp && resp.json()
    )
  ])
    .then(handleUserResponses)
    .catch(handleErrors);
};
