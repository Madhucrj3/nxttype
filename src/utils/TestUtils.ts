export function resolveWithTimeout<T>(response: T): Promise<T> {
  const timeOut = process.env.IS_JEST === "true" ? 0 : 2000;
  return new Promise((resolve) => {
    setTimeout(() => resolve(response), timeOut);
  });
}
