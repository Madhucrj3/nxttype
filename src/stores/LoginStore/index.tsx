import { action, observable } from "mobx";
import { ApiStatus, userDetail } from "../type";
class LoginStore {
  @observable 
  loginErrorMessage!:string
  @observable 
  apiStatus!:ApiStatus;

  constructor(){
    this.init()
  }

  @action
  init(){
    this.loginErrorMessage = ""
    this.apiStatus = ApiStatus.INITIAL
  }
  @action 
  fetchToken=async(userDetails:userDetail)=>{
    this.apiStatus=ApiStatus.LOADING;
    const URL = 'https://apis.ccbp.in/login';
    const response=await fetch(URL, {
        method: "POST",
        body: JSON.stringify(userDetails)
    })
   .then((response) => response.json())
    .then((data) => {
    console.log('Success:', data);
     return data;
    })
  .catch((error) => {
    console.error('Error:', error);
    });
    console.log(response);
    if(response.status_code===400)
    {
      this.apiStatus=ApiStatus.FAILURE;
      this.loginErrorMessage=response.error_msg;
    }
    else
    {
      localStorage.setItem('token',response.jwt_token);
      this.apiStatus=ApiStatus.SUCESS;
    }
  }

  clearStore(){
    this.init()
  }
}
const loginStore=new LoginStore();
export default loginStore;
export {LoginStore}
