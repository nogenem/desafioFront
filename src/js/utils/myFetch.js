export default url =>
  fetch(url).then(resp => {
    if (!resp.ok) {
      const err = new Error(resp.statusText);
      err.status = resp.status;
      throw err;
    }
    return resp;
  });
