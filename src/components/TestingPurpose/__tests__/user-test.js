// async/await can be used.
jest.mock("../request");

import * as user from "../user";
it("works with async/await", async () => {
  expect.assertions(1);
  const data = await user.getUserName(4);
  expect(data).toBe("Mark");
});

// async/await can also be used with `.resolves`.
it("works with async/await and resolves", async () => {
  expect.assertions(1);
  await expect(user.getUserName(5)).resolves.toBe("Paul");
});
// Or using async/await.
it("tests error with async/await", async () => {
  expect.assertions(1);
  try {
    await user.getUserName(1);
  } catch (e) {
    expect(e).toEqual({
      error: "User with 1 not found.",
    });
  }
});
