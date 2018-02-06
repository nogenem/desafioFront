import UserRepo from "../UserRepo";

const testData = {
  html_url: "http://github.com/test/testProj",
  name: "testProj",
  language: "JavaScript",
  description: "Some proj",
  subscribers_count: "0",
  stargazers_count: "0",
  forks_count: "0"
};

it("renders correctly when passed all props", () => {
  const output = UserRepo.render(testData);
  expect(output).toMatchSnapshot();
});

it("renders correctly when not passed all props", () => {
  const output = UserRepo.render({
    ...testData,
    description: undefined
  });
  expect(output).toMatchSnapshot();
});
