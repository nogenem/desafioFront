import { HomeRoute, UserRoute, RepoRoute } from "./routes";

$(() => {
  const routes = {
    "/": HomeRoute,
    "/user/:user": UserRoute,
    "/user/:user/:repo": RepoRoute
  };

  const router = Router(routes);

  router.init();

  if (!location.hash) {
    location.hash = "#/";
  }
});
