const makePromise = () => {
  let resolve;
  let reject;
  const promise = new Promise((resolve_, reject_) => { resolve = resolve_; reject = reject_; });
  return { resolve, reject, promise };
};

module.exports = {
  makePromise,
};

