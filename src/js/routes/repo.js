import { handleErrors, myFetch } from "../utils";

const handleRepoResponses = ([repoTpl, repoData]) => {
  const template = repoTpl(repoData);
  $("#view").empty();
  $("#view").append(template);
};

export default (user, repo) => {
  const fullName = `${user}/${repo}`;
  Promise.all([
    import("../../tpl/repo.hbs"),
    myFetch(`https://api.github.com/repos/${fullName}`).then(resp =>
      resp.json()
    )
  ])
    .then(handleRepoResponses)
    .catch(handleErrors);
};
