import { handleErrors, myFetch } from "../utils";

import renderer from "../utils/renderer";
import UserCard from "../components/UserCard";
import UserReposList from "../components/UserReposList";

const handleReposResponse = reposData => {
  renderer.append(UserReposList, reposData);
};

const handleUserResponse = userData => {
  renderer.render(UserCard, userData);

  const repos = userData.repos_url;
  myFetch(repos)
    .then(resp => resp.json())
    .then(handleReposResponse)
    .catch(handleErrors);
};

export default user => {
  myFetch(`https://api.github.com/users/${user}`)
    .then(resp => resp.json())
    .then(handleUserResponse)
    .catch(handleErrors);
};
