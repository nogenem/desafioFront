const handleErrorsResponse = (errorTpl, errorMsg) => {
  const template = errorTpl({
    text: errorMsg
  });
  $("#view").empty();
  $("#view").prepend(template);
};

export default err => {
  let msg = "";
  switch (err.status) {
    case 404:
      msg = "Informação não encontrada.";
      break;
    case 403:
      msg = "Limite da API alcançado.";
      break;
    case 500:
      msg = "Erro no servidor. Tente novamente mais tarde.";
    default:
      msg = "Erro desconhecido. Tente novamente mais tarde.";
      break;
  }
  import("../../tpl/error.hbs").then(resp => handleErrorsResponse(resp, msg));
};
