import UserCard from "../UserCard";

const testData = {
  name: "test",
  email: "test@test.com",
  bio: "some bio",
  avatar_url: "http://site.com/image.png",
  followers: "0",
  following: "0"
};

it("renders correctly when passed all props", () => {
  const output = UserCard.render(testData);
  expect(output).toMatchSnapshot();
});

it("renders correctly when not passed all props", () => {
  const output = UserCard.render({
    ...testData,
    email: undefined,
    bio: undefined,
    avatar_url: undefined
  });
  expect(output).toMatchSnapshot();
});
