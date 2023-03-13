import styled from "styled-components";
interface WrapperStyledComponent {
  bcol: string;
}
export const WrapperStyledComponent = styled.div<WrapperStyledComponent>`
  background-color: ${(props) => (props.bcol === "Light" ? "#f1f5f9" : "#000")};
  display: flex;
  width: 100%;
`;
