const render = (Comp, ...props) => {
  document.querySelector("#view").innerHTML = Comp.render(...props);
  if (Comp.didMount) Comp.didMount();
};

const append = (Comp, ...props) => {
  document.querySelector("#view").innerHTML += Comp.render(...props);
  if (Comp.didMount) Comp.didMount();
};

export default {
  render,
  append
};
