const handleHTML = html => {
  const template = Handlebars.compile(html)();
  $("#view").append(template);

  $("#searchForm").submit(e => {
    e.preventDefault();
    const user = $.sanitize($("#searchForm input").val());

    location.hash = `#/user/${user}`;
  });
};

const HomeHandler = () => {
  fetch("tpl/home.html")
    .then(resp => resp.text())
    .then(handleHTML);
};

window.HomeHandler = HomeHandler;
