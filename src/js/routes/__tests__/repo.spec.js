import UserRepo from "../../components/UserRepo";

// test data
const testData = { test: "Test" };
const testUser = "test";
const testRepo = "testProj";

// mock
jest.mock("../../utils/myFetch", () => ({
  __esModule: true,
  default: url => {
    // testUser/testRepo
    expect(url).toBe("https://api.github.com/repos/test/testProj");
    return Promise.resolve({
      ok: true,
      // testData
      json: () => Promise.resolve({ test: "Test" })
    });
  }
}));

afterAll(() => {
  jest.resetModules();
});

it("calls `myFetch` and renders `UserRepo`", () => {
  expect.assertions(3);

  jest.doMock("../../utils/renderer", () => ({
    __esModule: true,
    default: {
      render: (Comp, data) => {
        expect(Comp).toEqual(UserRepo);
        expect(data).toEqual(testData);
      }
    }
  }));

  const RepoRoute = require("../repo").default;

  RepoRoute(testUser, testRepo);
});
