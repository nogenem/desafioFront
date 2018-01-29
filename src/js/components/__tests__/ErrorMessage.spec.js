import ErrorMessage from "../ErrorMessage";

it("renders correctly", () => {
  const output = ErrorMessage.render("Some error");
  expect(output).toMatchSnapshot();
});
