export const defaultFetcher = (...args) =>
  fetch(...args).then((res) => res.json());

export default defaultFetcher;
