import { useEffect } from "react";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useParams } from "react-router-dom";
import { GlobalStore } from "../../stores/GlobalStore";
import { VideoStore } from "../../stores/VideoStore";
import { IndividualVideoDetailInterface } from "../../stores/type";
import { INITIAL, LOADING, SUCESS } from "../../constants/ApiStatuss";
import IndividualVideoDataMain from "../IndividualVideoDataMain";
import {
  FAILURE_DARK_THEME,
  FAILURE_LIGHT_THEME,
} from "../../constants/ImageUrl";
import Failure from "../FailureView";
import LoaderMain from "../LoaderComponent";
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
                  ? FAILURE_LIGHT_THEME
                  : FAILURE_DARK_THEME
              }
              alt="fail"
              retryPage={handleRetryPage}
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
