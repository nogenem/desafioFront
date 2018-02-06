import SearchForm from "../../components/SearchForm";

afterAll(() => {
  jest.resetModules();
});

it("renders `SearchForm`", () => {
  expect.assertions(1);

  jest.doMock("../../utils/renderer", () => ({
    __esModule: true,
    default: {
      render: Comp => {
        expect(Comp).toEqual(SearchForm);
      }
    }
  }));

  const HomeRoute = require("../home").default;

  HomeRoute();
});
