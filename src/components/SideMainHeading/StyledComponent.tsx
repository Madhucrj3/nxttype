import styled from "styled-components";
interface SideMainHeadingInterface {
  colors: String;
}
export const SideMainHeaddiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;
export const SideMainHeaddivimg = styled.div`
  padding-right: 12px;
`;
export const SideMainHeadh1 = styled.h1<SideMainHeadingInterface>`
  color: ${(props) => (props.colors === "Light" ? "#000" : "#fff")};
`;
