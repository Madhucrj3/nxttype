import styled from "styled-components";
import { LIGHT } from "../../constants/themes";
interface CheckBoxContainerInterface {
  CheckboxColor: string;
}
export const CheckBoxContainer = styled.div<CheckBoxContainerInterface>`
  color: ${(props) => (props.CheckboxColor === LIGHT ? "#000" : "#fff")};
`;
export const CheckBoxInput = styled.input``;
export const CheckBoxLabel = styled.label``;
