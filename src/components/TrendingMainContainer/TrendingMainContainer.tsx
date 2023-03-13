import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { INITIAL, LOADING, SUCESS } from "../../constants/ApiStatuss";
import { GlobalStore } from "../../stores/GlobalStore";
import { VideoDetailInterface } from "../../stores/type";
import { VideoStore } from "../../stores/VideoStore";
import Failure from "../FailureView";
import LoaderMain from "../LoaderComponent.tsx";
import SideMainHeading from "../SideMainHeading";
import TrendingDataContainer from "../TrendingDataContainer";
import { TrendMainComp, TrendMainData } from "./StyledComponent";
interface TrendingMainContainerProps {}
interface InjectedTrendingMainContainerProps
  extends TrendingMainContainerProps {
  globalStore: GlobalStore;
  videoStore: VideoStore;
}
const TrendingMainContainer = inject(
  "globalStore",
  "videoStore"
)(
  observer((props: TrendingMainContainerProps) => {
    const { globalStore: theme, videoStore } =
      props as InjectedTrendingMainContainerProps;
    const trendingVideoData = toJS(
      videoStore.trendingVideoData
    ) as VideoDetailInterface[];
    console.log(trendingVideoData);
    useEffect(() => {
      videoStore.getTrendData();
    }, []);
    const handleRetryPage = () => {};
    const renderTrendingContent = () => {
      const apiStatus = videoStore.trendingApiStatus;
      switch (apiStatus) {
        case INITIAL:
          return <LoaderMain />;
        case LOADING:
          return <LoaderMain />;
        case SUCESS:
          return (
            <>
              <SideMainHeading
                titleName="Trending"
                iconss={faFireFlameCurved}
              />
              <TrendMainData>
                {trendingVideoData.map((trend) => (
                  <TrendingDataContainer key={trend.id} tsData={trend} />
                ))}
              </TrendMainData>
            </>
          );
        default:
          return (
            <Failure
              src={
                theme.themes === "Light"
                  ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
                  : "https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
              }
              alt="fail"
              page={handleRetryPage}
              heading="Oops! somthing Went Wrong"
              description="We are having some trouble to complete tour request Please try again"
            />
          );
      }
    };
    return <TrendMainComp>{renderTrendingContent()}</TrendMainComp>;
  })
);

export default TrendingMainContainer;
