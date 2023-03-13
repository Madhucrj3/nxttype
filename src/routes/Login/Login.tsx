import { inject, observer } from "mobx-react";
import { LoginStore } from "../../stores/LoginStore";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import Checkbox from "../../components/Checkbox";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStore } from "../../stores/GlobalStore";
import "./Login.css";
import { FAILURE, INITIAL, LOADING, SUCESS } from "../../constants/ApiStatuss";
import {
  LoginContainer,
  LoginDiv,
  LoginDivimg,
  WrongCredential,
} from "./LoginStyledComponent";
import { LIGHT } from "../../constants/GlobalData";
interface LoginProps {}

interface InjectedProps {
  loginStore: LoginStore;
  globalStore: GlobalStore;
}
const Login = inject(
  "loginStore",
  "globalStore"
)(
  observer((props: LoginProps) => {
    const { loginStore, globalStore: theme } = props as InjectedProps;
    const [showPassword, setshowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    //REVIEW: Keep two states for username and password
    const navigate = useNavigate();
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        navigate("/");
      }
    }, []);
    const handleChangeCheckbox = () => {
      setshowPassword((prevState) => !prevState);
    };
    const handleChangeUserDetail = (e: string) => {
      setUsername(e);
    };
    const handleChangePassword = (e: string) => {
      setPassword(e);
    };
    const handleCredential = async () => {
      await loginStore.fetchToken({
        username: username,
        password: password,
      });
      console.log(loginStore.apiStatus);
      if (loginStore.apiStatus === SUCESS) navigate("/");
    };
    console.log(theme.themes);
    return (
      <LoginContainer
        backgroundColorTheme={theme.themes === LIGHT ? "#fff" : "#313131"}
      >
        <LoginDiv
          backgroundColorTheme={theme.themes === LIGHT ? "#fff" : "#000"}
          currTheme={theme.themes === "Light" ? "#7e858e" : "#fff"}
        >
          <LoginDivimg style={{ color: "#fff" }}>
            <Logo
              logoStyles={{ width: "200px" }}
              src1={
                theme.themes === LIGHT
                  ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              }
              alt1="logo"
            />
          </LoginDivimg>
          <Input
            place="Username"
            type="text"
            name="username"
            label="USERNAME"
            value={username}
            handleChangeDeta={handleChangeUserDetail}
          />
          <Input
            place="Password"
            type={showPassword === true ? "text" : "password"}
            name="password"
            label="PASSWORD"
            value={password}
            handleChangeDeta={handleChangePassword}
          />
          <Checkbox
            type="checkbox"
            name="show"
            label="SHOW"
            handleOnClickCheckBox={handleChangeCheckbox}
          />
          <Button
            text="Login"
            btnstyle={{
              width: "100%",
              height: "40px",
              borderRadius: "8px",
              backgroundColor: "#3b82f6",
              border: "none",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "700",
              cursor: "pointer",
            }}
            isLoading={loginStore.apiStatus === LOADING ? true : false}
            handleOnClick={handleCredential}
          />
          <WrongCredential>
            {loginStore.apiStatus === FAILURE && loginStore.loginErrorMessage}{" "}
          </WrongCredential>
        </LoginDiv>
      </LoginContainer>
    );
  })
);

export default Login;
