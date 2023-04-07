import loginStore from ".";
import { ApiStatus, userDetail } from "../type";
describe("LoginStore", () => {
  it("initializes the store correctly", () => {
    expect(loginStore.loginErrorMessage).toBe("");
    expect(loginStore.apiStatus).toBe(ApiStatus.INITIAL);
    expect(loginStore.isLoggedIn).toBe(false);
  });

  it("fetchToken sets apiStatus to LOADING and fetches token", async () => {
    const userDetails: userDetail = {
      username: "test_user",
      password: "test_password",
    };
    await loginStore.fetchToken(userDetails);
    expect(loginStore.apiStatus).toBe(ApiStatus.SUCESS);
    expect(localStorage.getItem("token")).toBe("dummy_token");
  });

  it("fetchToken for loading", async () => {
    const userDetails: userDetail = {
      username: "test_user",
      password: "test_password",
    };
    loginStore.fetchToken(userDetails);
    expect(loginStore.apiStatus).toBe(ApiStatus.LOADING);
    //expect(localStorage.getItem("token")).toBe("dummy_token");
  });
});
