const handleResponses = ([html, repoData]) => {
  const template = Handlebars.compile(html)(repoData);
  $("#view").empty();
  $("#view").append(template);
};

const RepoHandler = (user, repo) => {
  const fullName = `${user}/${repo}`;
  Promise.all([
    fetch("tpl/repo.html").then(resp => resp.text()),
    fetch(`https://api.github.com/repos/${fullName}`).then(resp => resp.json())
  ]).then(handleResponses);
};
