import styled from "styled-components";
interface Currtheme {
  backgroundColorTheme: string;
  currTheme?: string;
}
export const LoginContainer = styled.div<Currtheme>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${(props) => props.backgroundColorTheme};
`;
export const LoginDiv = styled.div<Currtheme>`
  background-color: #fff;
  padding: 2rem 1rem 3rem 1rem;
  width: 400px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColorTheme};
  color: ${(props) => props.currTheme};
`;
export const LoginDivimg = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;
export const WrongCredential = styled.p`
  color: red;
  height: 30px;
`;
export const InputLogin = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
`;
export const InputLoginLabel = styled.label`
  font-size: 12px;
  margin-bottom: 8px;
`;
export const InputLoginInput = styled.div`
  height: 35px;
  border: 1px solid #cbd5e1;
  border-radius: 5px;
`;
