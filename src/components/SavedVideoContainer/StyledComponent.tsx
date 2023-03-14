import styled from "styled-components";
import NotFoundPage from "../NotFoundPage";
interface SaveVieoStyledComponent {
  bcol: string;
}
export const SaveStyled = styled.div<SaveVieoStyledComponent>`
  display: flex;
  background-color: ${(props) => props.bcol};
`;
export const SavedVideoMain = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  height: 90vh;
  overflow: auto;
`;
export const SavedVideoMaindet = styled.div``;
export const NoSavedVideo = styled(NotFoundPage)``;
