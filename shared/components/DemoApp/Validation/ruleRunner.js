export const ruleRunner = (field, name, ...validations) => (state) => {
  for (let v of validations) {
    let errorMessageFunc = v(state[field], state);
    if (errorMessageFunc) {
      return { [field]: errorMessageFunc(name) };
    }
  }
  return null;
};

export const run = (state, runners) =>
  runners.reduce((memo, runner) => Object.assign(memo, runner(state)), {});
