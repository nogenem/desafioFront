const handleErrorsResponse = errorTpl => {
  const template = errorTpl({
    text: "Informação não encontrada."
  });
  $("#view").empty();
  $("#view").prepend(template);
};

export default err => {
  import("../../tpl/error.hbs").then(handleErrorsResponse);
};
