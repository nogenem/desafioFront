import UserReposList from "../UserReposList";

const testData = [
  {
    full_name: "test/testProj",
    name: "testProj",
    stargazers_count: "0",
    forks_count: "0",
    open_issues: "0"
  }
];

it("renders correctly", () => {
  const output = UserReposList.render(testData);
  expect(output).toMatchSnapshot();
});
