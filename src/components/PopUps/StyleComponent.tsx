import styled from "styled-components";
interface ColorBack {
  colorback: string;
}
interface Colorh1 {
  colorh1: string;
}
export const PopupContainer = styled.div<ColorBack>`
  padding: 2rem;
  border-radius: 8px;
  background-color: ${(props) => props.colorback};
`;
export const PopupContainerHeading = styled.h4<Colorh1>`
  text-align: center;
  color: ${(props) => props.colorh1};
`;
export const PopupContainerButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const PopupButtonCancel = styled.button`
  background-color: #000;
  color: #fff;
  border: 2px solid #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
export const PopupButtonConfirm = styled.button`
  background-color: #3b82f6;
  border: none;
  color: #fff;
  font-weight: 600;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;
