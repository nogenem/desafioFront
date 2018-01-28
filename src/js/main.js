$.sanitize = input => {
  const output = input
    .replace(/<script[^>]*?>.*?<\/script>/gi, "")
    .replace(/<[\/\!]*?[^<>]*?>/gi, "")
    .replace(/<style[^>]*?>.*?<\/style>/gi, "")
    .replace(/<![\s\S]*?--[ \t\n\r]*>/gi, "");
  return output;
};

$(() => {
  const routes = {
    "/": HomeHandler,
    "/user/:user": UserHandler,
    "/user/:user/:repo": RepoHandler
  };

  const router = Router(routes);

  router.init();

  if (!location.hash) {
    location.hash = "#/";
  }
});
