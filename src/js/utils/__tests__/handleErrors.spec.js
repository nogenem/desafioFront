import ErrorMessage from "../../components/ErrorMessage";

// mock console.error
const oldConsoleError = window.console.error;
window.console.error = () => {};

// mock render
const mockRender = expectedMsg => (Comp, msg) => {
  // Como "===" não funciona, resolvi usar apenas o nome da função
  expect(Comp.render.name).toBe(ErrorMessage.render.name);
  expect(msg).toBe(expectedMsg);
};

beforeEach(() => {
  jest.resetModules();
});

it("404", () => {
  expect.assertions(2);

  jest.doMock("../renderer", () => ({
    __esModule: true,
    default: {
      render: mockRender("Informação não encontrada.")
    }
  }));

  const handleErrors = require("../handleErrors").default;
  const err = { status: 404 };

  handleErrors(err);
});

it("403", () => {
  expect.assertions(2);

  jest.doMock("../renderer", () => ({
    __esModule: true,
    default: {
      render: mockRender("Limite da API alcançado.")
    }
  }));

  const handleErrors = require("../handleErrors").default;
  const err = { status: 403 };

  handleErrors(err);
});

it("500", () => {
  expect.assertions(2);

  jest.doMock("../renderer", () => ({
    __esModule: true,
    default: {
      render: mockRender("Erro no servidor. Tente novamente mais tarde.")
    }
  }));

  const handleErrors = require("../handleErrors").default;
  const err = { status: 500 };

  handleErrors(err);
});

it("other errors", () => {
  expect.assertions(2);

  jest.doMock("../renderer", () => ({
    __esModule: true,
    default: {
      render: mockRender("Erro desconhecido. Tente novamente mais tarde.")
    }
  }));

  const handleErrors = require("../handleErrors").default;
  const err = { status: 400 };

  handleErrors(err);
});

afterAll(() => {
  window.console.error = oldConsoleError;
});
