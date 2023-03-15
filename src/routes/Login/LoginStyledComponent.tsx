import styled from "styled-components";
import { LIGHT } from "../../constants/themes";
interface Currtheme {
  backgroundColorTheme: string;
  currTheme?: string;
}
interface InputBoxInterface {
  inputColor: string;
}
export const LoginContainer = styled.div<Currtheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) =>
    props.backgroundColorTheme === LIGHT ? "#fff" : "#313131"};
`;
export const LoginDiv = styled.div<Currtheme>`
  background-color: #fff;
  padding: 2rem 1rem 3rem 1rem;
  width: 400px;
  border-radius: 8px;
  background-color: ${(props) =>
    props.backgroundColorTheme === LIGHT ? "#fff" : "#000"};
  color: ${(props) => (props.currTheme === "Light" ? "#7e858e" : "#fff")};
`;
export const LoginDivimg = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  color: #fff;
`;
export const WrongCredential = styled.p`
  color: red;
  height: 30px;
`;
export const InputContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;
export const InputLabel = styled.label`
  font-size: 12px;
  margin-bottom: 8px;
`;
export const InputBox = styled.input<InputBoxInterface>`
  padding: 0 1rem;
  color: ${(props) => (props.inputColor === "Light" ? "#000" : "#fff")};
  background-color: ${(props) =>
    props.inputColor === "Light" ? "fff" : "#000"};
`;
export const InputLoginInput = styled.div`
  height: 35px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
`;
