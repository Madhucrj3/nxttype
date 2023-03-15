import styled from "styled-components";
interface TrendDataContdDivDetailInterface {
  colors?: string;
  colorOfHeading?: string;
}
export const TrendMainComp = styled.div`
  width: 100%;
  padding: 1rem 2rem;
  height: 90vh;
  overflow: auto;
`;
export const TrendMainData = styled.div`
  height: 100%;
`;
//trend Save Data
export const TrendingDataContainers = styled.div`
  display: flex;
  margin-bottom: 1rem;
  @media screen and (max-width: 576px) {
    display: block;
  }
`;
export const TrendingDataImageContainer = styled.div`
  margin-right: 1rem;
`;
export const TrendingDataImage = styled.img`
  width: 300px;
  height: 166.3px;
  object-fit: fill;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) and (min-width: 576px) {
    width: 250px;
  }
`;
export const TrendingDataContainerDetail = styled.div<TrendDataContdDivDetailInterface>`
  color: ${(props) => (props.colors === "Light" ? "#000" : "#cbd5e1")};
  @media screen and (max-width: 576px) {
    display: flex;
    align-items: center;
  }
`;
export const TrendingDataImageContainerDetail = styled.div`
  display: none;
  @media screen and (max-width: 576px) {
    display: block;
    margin-right: 1rem;
  }
`;
export const TrendDataContainerHeadingDetail = styled.h4<TrendDataContdDivDetailInterface>`
  color: ${(props) => (props.colorOfHeading === "Light" ? "#000" : "#fff")};
`;
export const TrendDataContainerParaDetail = styled.p`
  @media screen and (max-width: 576px) {
    display: inline;
  }
`;
export const TrendDataContainerParagraphDetail = styled.div`
  @media screen and (max-width: 576px) {
    display: inline;
  }
`;
export const TrendDataContainerParaDetailSpan = styled.span`
  margin-right: 1rem;
`;
