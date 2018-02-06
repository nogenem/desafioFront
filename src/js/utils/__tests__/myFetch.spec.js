import myFetch from "../myFetch";

// mock fetch
const oldFetch = window.fetch;

// test data
const testUrl = "www.google.com";
const testNoErrorResp = {
  ok: true,
  status: 200,
  statusText: "OK"
};
const testErrorResp = {
  ok: false,
  status: 404,
  statusText: "Not Found"
};

it("calls `fetch` with the correct `url`", () => {
  expect.assertions(1);

  window.fetch = url => {
    expect(url).toBe(testUrl);
    return Promise.resolve(testNoErrorResp);
  };

  myFetch(testUrl);
});

it("returns the response when no error occurs", done => {
  window.fetch = url => Promise.resolve(testNoErrorResp);

  myFetch(testUrl).then(resp => {
    expect(resp).toEqual(testNoErrorResp);
    done();
  });
});

it("returns the error when an error occurs", done => {
  window.fetch = url => Promise.resolve(testErrorResp);

  myFetch(testUrl).catch(err => {
    expect(err.status).toEqual(testErrorResp.status);
    expect(err.message).toEqual(testErrorResp.statusText);
    done();
  });
});

afterAll(() => {
  window.fetch = oldFetch;
});
