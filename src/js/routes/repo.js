import { handleErrors, myFetch } from "../utils";

import renderer from "../utils/renderer";
import UserRepo from "../components/UserRepo";

const handleRepoResponse = repoData => {
  renderer.render(UserRepo, repoData);
};

export default (user, repo) => {
  const fullName = `${user}/${repo}`;
  myFetch(`https://api.github.com/repos/${fullName}`)
    .then(resp => resp.json())
    .then(handleRepoResponse)
    .catch(handleErrors);
};
