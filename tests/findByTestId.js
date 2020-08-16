export const findByTestId = (wrapper, testId) => {
  return wrapper.find(`[data-testid="${testId}"]`)
}
