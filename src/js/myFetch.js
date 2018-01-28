const myFetch = url =>
  fetch(url).then(resp => {
    if (!resp.ok) throw new Error(resp.statusText);
    return resp;
  });
