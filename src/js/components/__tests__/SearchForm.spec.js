import SearchForm from "../SearchForm";

it("renders correctly", () => {
  const output = SearchForm.render();
  expect(output).toMatchSnapshot();
});
