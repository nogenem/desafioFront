const handleErrorsResponse = html => {
  const template = Handlebars.compile(html)({
    text: "Informação não encontrada"
  });
  $("#view").empty();
  $("#view").prepend(template);
};

const handleErrors = err => {
  myFetch("tpl/error.html")
    .then(resp => resp.text())
    .then(handleErrorsResponse);
};
