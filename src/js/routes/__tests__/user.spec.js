import UserCard from "../../components/UserCard";
import UserReposList from "../../components/UserReposList";

// test data
const testData = { repos_url: "http://github.com/repos/test" };
const testUser = "test";

// mock
jest.mock("../../utils/myFetch", () => ({
  __esModule: true,
  default: () =>
    Promise.resolve({
      ok: true,
      // testData
      json: () => Promise.resolve({ repos_url: "http://github.com/repos/test" })
    })
}));

afterAll(() => {
  jest.resetModules();
});

it("calls `myFetch`, renders `UserCard` and appends `UserReposList`", () => {
  expect.assertions(4);

  jest.doMock("../../utils/renderer", () => ({
    __esModule: true,
    default: {
      render: (Comp, data) => {
        expect(Comp).toEqual(UserCard);
        expect(data).toEqual(testData);
      },
      append: (Comp, data) => {
        expect(Comp).toEqual(UserReposList);
        expect(data).toEqual(testData);
      }
    }
  }));

  const UserRoute = require("../user").default;

  UserRoute(testUser);
});
