import { sanitize } from "../utils";

const handleHomeResponse = homeTpl => {
  const template = homeTpl();
  $("#view").empty();
  $("#view").append(template);

  $("#searchForm").submit(e => {
    e.preventDefault();
    const user = sanitize($("#searchForm input").val());

    location.hash = `#/user/${user}`;
  });
};

export default () => {
  import("../../tpl/home.hbs").then(handleHomeResponse);
};
