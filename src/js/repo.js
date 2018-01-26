const handleRepoResponses = ([html, repoData]) => {
  const template = Handlebars.compile(html)(repoData);
  $("#view").empty();
  $("#view").append(template);
};

const RepoHandler = (user, repo) => {
  const fullName = `${user}/${repo}`;
  Promise.all([
    myFetch("tpl/repo.html").then(resp => resp.text()),
    myFetch(`https://api.github.com/repos/${fullName}`).then(resp =>
      resp.json()
    )
  ])
    .then(handleRepoResponses)
    .catch(handleErrors);
};
