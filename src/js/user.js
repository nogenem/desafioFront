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

const handleCardResponses = ([card, userDetail]) => {
  const template = Handlebars.compile(card)(userDetail);
  $("#view").empty();
  $("#view").append(template);

  const repos = userDetail.repos_url;
  Promise.all([
    fetch("tpl/userReposList.html").then(resp => resp.text()),
    fetch(repos).then(resp => resp.json())
  ]).then(handleReposResponses);
};

const UserHandler = user => {
  Promise.all([
    fetch("tpl/userCard.html").then(resp => resp.text()),
    fetch(`https://api.github.com/users/${user}`).then(resp => resp.json())
  ]).then(handleCardResponses);
};

window.UserHandler = UserHandler;
