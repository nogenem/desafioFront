import renderer from "../renderer";

beforeEach(() => {
  document.body.innerHTML = `<div id="view"></div>`;
});

describe(".render", () => {
  it("renders correctly", () => {
    const Comp = {
      render: () => `<div id="test">Test</div>`
    };
    renderer.render(Comp);

    expect(document.querySelector("#test")).not.toBeNull();
  });

  it("passes props correctly", () => {
    expect.assertions(1);

    const Comp = {
      render: text => {
        expect(text).toBe("test");
      }
    };

    renderer.render(Comp, "test");
  });

  it("calls `didMount`", () => {
    const Comp = {
      render: () => {},
      didMount: jest.fn()
    };

    renderer.render(Comp);
    expect(Comp.didMount).toHaveBeenCalled();
  });
});

describe(".append", () => {
  it("appends correctly", () => {
    const Comp = {
      render: () => `<div class="test">Test</div>`
    };
    renderer.append(Comp);
    expect(document.querySelector(".test")).not.toBeNull();

    renderer.append(Comp);
    expect(document.querySelectorAll(".test")).toHaveLength(2);
  });

  it("passes props correctly", () => {
    expect.assertions(1);

    const Comp = {
      render: text => {
        expect(text).toBe("test");
      }
    };

    renderer.append(Comp, "test");
  });

  it("calls `didMount`", () => {
    const Comp = {
      render: () => {},
      didMount: jest.fn()
    };

    renderer.append(Comp);
    expect(Comp.didMount).toHaveBeenCalled();
  });
});

afterAll(() => {
  document.body.innerHTML = "";
});
