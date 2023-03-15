import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { GlobalStore } from "../../stores/GlobalStore";
import { VideoStore } from "../../stores/VideoStore";
import { VideoDetailInterface } from "../../stores/type";
import { NO_SAVED_VIDEO } from "../../constants/ImageUrl";
import SideMainHeading from "../SideBarMenuSection";
import TrendingDataContainer from "../TrendingDataContainer";
import {
  NoSavedVideo,
  SavedVideoMain,
  SavedVideoMaindet,
} from "./styledComponent";
interface SaveVideoMainContainerProps {}
interface InjectedSaveVideoMainContainerProps
  extends SaveVideoMainContainerProps {
  globalStore: GlobalStore;
  videoStore: VideoStore;
}
const SaveVideoMainContainer = inject(
  "globalStore",
  "videoStore"
)(
  observer((props: SaveVideoMainContainerProps) => {
    const { videoStore } = props as InjectedSaveVideoMainContainerProps;
    const savedVideoList = toJS(
      videoStore.savedVideo
    ) as VideoDetailInterface[];
    console.log(savedVideoList);
    return (
      <SavedVideoMain>
        {savedVideoList.length === 0 ? (
          <NoSavedVideo
            NoSavedHeading="No saved Video Found"
            NoSavedDescription="you can save your video while watching them"
            NoSavedSrc={NO_SAVED_VIDEO}
            NoSavedAlt="nosave"
          />
        ) : (
          <div>
            <SideMainHeading titleName="Saved Videos" iconss={faVideo} />
            <SavedVideoMaindet>
              {savedVideoList.map((saveindData) => (
                <TrendingDataContainer
                  key={saveindData.id}
                  tsData={saveindData}
                />
              ))}
            </SavedVideoMaindet>
          </div>
        )}
      </SavedVideoMain>
    );
  })
);

export default SaveVideoMainContainer;
