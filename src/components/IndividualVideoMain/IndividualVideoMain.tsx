import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { INITIAL, LOADING, SUCESS } from "../../constants/ApiStatuss";
import { GlobalStore } from "../../stores/GlobalStore";
import { IndividualVideoDetailInterface } from "../../stores/type";
import { VideoStore } from "../../stores/VideoStore";
import Failure from "../FailureView";
import LoaderMain from "../LoaderComponent.tsx";
import IndividualVideoDataMain from "./IndividualVideoDataMain";
interface IndividualVideo {}
interface InjectedIndividualVideo extends IndividualVideo {
  globalStore: GlobalStore;
  videoStore: VideoStore;
}
const IndividualVideoMain = inject(
  "globalStore",
  "videoStore"
)(
  observer((props: IndividualVideo) => {
    const { globalStore: theme, videoStore } = props as InjectedIndividualVideo;
    console.log(videoStore);
    const { id } = useParams();
    const Indiviualdata = toJS(
      videoStore.indvidiualVideoData
    ) as IndividualVideoDetailInterface;
    console.log(Indiviualdata);
    useEffect(() => {
      if (id !== undefined) videoStore.fetchIndvidiualVideoData(id);
    }, []);

    const handleRetryPage = () => {
      if (id !== undefined) videoStore.fetchIndvidiualVideoData(id);
    };
    const renderIndividualContentContent = () => {
      const apiStatus = videoStore.indvidiualVideoApiStatus;
      switch (apiStatus) {
        case INITIAL:
          return <LoaderMain />;
        case LOADING:
          return <LoaderMain />;
        case SUCESS:
          return (
            <>
              <IndividualVideoDataMain indVidualVideo={Indiviualdata} id={id} />
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
    return <>{renderIndividualContentContent()}</>;
  })
);
export default IndividualVideoMain;
