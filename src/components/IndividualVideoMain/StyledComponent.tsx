import styled from "styled-components";
import { LIGHT } from "../../constants/GlobalData";
interface IndividualVideoColors {
  colors: string;
}
export const IndividualVideodiv = styled.div`
  width: 100%;
  height: 90vh;
  padding: 1rem 2rem;
`;
export const IndividualVideoREact = styled.div`
  height: 500px;
  @media screen and (max-width: 576px) {
    height: 230px;
  }
  @media screen and (max-width: 768px) and (min-width: 576px) {
    height: 320px;
  }
  @media screen and (max-width: 992px) and (min-width: 768px) {
    height: 400px;
  }
`;

export const IndividualVideoREactDetail = styled.div<IndividualVideoColors>`
  color: ${(props) => (props.colors === LIGHT ? "#000" : "#fff")};
`;
export const IndividualVideoREactDetailh1 = styled.p``;
export const IndividualVideoREactDetail2div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
export const IndividualVideoREactDetail2divlike = styled.div`
  cursor: pointer;
  margin: 0 0.8rem;
`;
export const IndividualVideoREactDetail2divlikecontd = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
export const IndividualVidecompoline = styled.div`
  height: 2px;
  background-color: #d7dfe9;
`;
export const IndividualCompDetailed = styled.div`
  display: flex;
`;
export const IndividualCompDetaileddivimg = styled.div`
  margin-top: 22.178px;
  margin-right: 1rem;
`;
export const IndividualCompDetailedimg = styled.img`
  height: 40px;
`;
export const IndividualCompDetailedmain = styled.div``;
export const HomeDataContSec23 = styled.div`
  display: flex;
  justify-content: space-between;
`;
