import { action, observable } from "mobx";
import ApiService from "../../services/VideoServices/index.api";
import ApiServiceFixture from "../../services/VideoServices/index.fixture";
import { ApiStatus, userDetail } from "../type";
class LoginStore {
  services!: ApiService | ApiServiceFixture;
  @observable
  loginErrorMessage!: string;
  @observable
  apiStatus!: ApiStatus;
  @observable
  isLoggedIn: boolean = false;
  constructor() {
    this.init();
  }
  @action
  init() {
    if (localStorage.getItem("token")) this.isLoggedIn = true;
    this.loginErrorMessage = "";
    this.apiStatus = ApiStatus.INITIAL;
    this.services =
      process.env.IS_JEST === "true"
        ? new ApiServiceFixture()
        : new ApiService();
  }
  @action
  fetchToken = async (userDetails: userDetail) => {
    this.apiStatus = ApiStatus.LOADING;
    await this.services
      .fetchToken(userDetails)
      .then(
        (response) => {
          if (response) {
            if (response.jwt_token !== undefined) {
              this.apiStatus = ApiStatus.SUCESS;
              this.isLoggedIn = true;
              localStorage.setItem("token", response.jwt_token);
            } else {
              this.apiStatus = ApiStatus.FAILURE;
              this.loginErrorMessage = response.error_msg;
            }
          }
        },
        (reason) => {
          console.log(reason, "Error ??");
          this.apiStatus = ApiStatus.FAILURE;
          this.loginErrorMessage = reason.error_msg;
        }
      )
      .catch((error) => {
        console.log(error, ">>ERROR<<");
      });
  };
}
const loginStore = new LoginStore();
export default loginStore;
export { LoginStore };
