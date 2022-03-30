export const curry = f => (a, ..._) => {
  if (_.length) return f(a, ..._);
  return (..._) => f(a, ..._);
};
