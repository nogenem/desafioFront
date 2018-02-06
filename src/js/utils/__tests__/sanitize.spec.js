import sanitize from "../sanitize";

it("removes <script>...</script>", () => {
  const value = "<script>document.title='test';</script>Ola mundo";
  expect(sanitize(value)).toBe("Ola mundo");
});

it("removes <style>...</style>", () => {
  const value = "<style>body { display: none; }</style>Ola mundo";
  expect(sanitize(value)).toBe("Ola mundo");
});

it("removes html's tags", () => {
  const value = "<div>Ola <b>Mundo</b></div>Ola mundo";
  expect(sanitize(value)).toBe("Ola MundoOla mundo");
});

it("removes html's comments", () => {
  const value = "<!-- Ola Mundo -->Ola mundo";
  expect(sanitize(value)).toBe("Ola mundo");
});
