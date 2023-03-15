import { useEffect, useState } from "react";
import { inject, observer } from "mobx-react";
import ReactPlayer from "react-player";
import {
  faThumbsDown,
  faThumbsUp,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import { GlobalStore } from "../../stores/GlobalStore";
import { VideoStore } from "../../stores/VideoStore";
import { IndividualVideoDetailInterface } from "../../stores/type";

import {
  IndividualVideoReactPlayerDescription,
  IndividualCompDetailed,
  IndividualCompDetaileddivimg,
  IndividualCompDetailedimg,
  IndividualCompDetailedmain,
  IndividualVideComponentline,
  IndividualVideoContainer,
  IndividualVideoReactPlayer,
  IndividualVideoReactPlayerDetail,
  IndividualVideoReactPlayerDetailDescription,
  IndividualVideoReactPlayerLikeContainer,
  IndividualVideoReactPlayerDetailHeading,
} from "../IndividualVideoMain/styledComponent";
import IndividualActionContainer from "../IndividualActionContainer";

interface IndividualVideoDataMainProps {
  indVidualVideo: IndividualVideoDetailInterface;
  id: string | undefined;
}
interface InjectedIndividualVideoDataMainProps
  extends IndividualVideoDataMainProps {
  globalStore: GlobalStore;
  videoStore: VideoStore;
}

const IndividualVideoDataMain = inject(
  "globalStore",
  "videoStore"
)(
  observer((props: IndividualVideoDataMainProps) => {
    const { indVidualVideo: indData, id } = props;
    const { globalStore: globalData, videoStore } =
      props as InjectedIndividualVideoDataMainProps;
    const [individualLike, setIndividualLike] = useState(false);
    const [individualDislike, setIndividualDislike] = useState(false);
    const [individualSaveVideo, setIndividualSaveVideo] = useState(false);
    const { setLikeVideo, setDisLikeVideo, setSaveVideo } = videoStore;
    useEffect(() => {
      if (id !== undefined) {
        if (videoStore.handleLikeInStore(id)) {
          setIndividualLike(true);
          setIndividualDislike(false);
        }
        if (videoStore.handledislikeInStore(id)) {
          setIndividualLike(false);
          setIndividualDislike(true);
        }
        if (videoStore.handlesavevideoInStore(indData)) {
          setIndividualSaveVideo(true);
        }
      }
    }, []);

    const handleLike = () => {
      setLikeVideo(indData.id);
      console.log("liked");
      if (id !== undefined && videoStore.handleLikeInStore(id)) {
        setIndividualLike(true);
        setIndividualDislike(false);
      } else {
        setIndividualLike(false);
        setIndividualDislike(false);
      }
    };
    const handledisLike = () => {
      console.log("disliked");
      setDisLikeVideo(indData.id);
      if (id !== undefined && videoStore.handledislikeInStore(id)) {
        setIndividualDislike(true);
        setIndividualLike(false);
      } else {
        setIndividualDislike(false);
        setIndividualLike(false);
      }
    };
    const handleSaveVideo = () => {
      setSaveVideo(indData);
      if (id !== undefined && videoStore.handlesavevideoInStore(indData)) {
        setIndividualSaveVideo(true);
      } else setIndividualSaveVideo(false);
    };
    console.log("Like" + individualLike);
    console.log("DisLike" + individualDislike);
    const likeValue = () => {
      console.log("like value called");
      return individualLike;
    };
    const { title, video_url, channel, description } = indData;
    const descriptionFunction = () => {
      return (
        <IndividualCompDetailedmain>
          <h5>{channel.name}</h5>
          <p>{channel.subscriber_count} subscribers</p>
          <p>{description}</p>
        </IndividualCompDetailedmain>
      );
    };
    return (
      <IndividualVideoContainer>
        <IndividualVideoReactPlayer>
          <ReactPlayer
            url={video_url}
            width="auto"
            height="100%"
            controls={true}
          />
        </IndividualVideoReactPlayer>
        <IndividualVideoReactPlayerDetail colors={globalData.themes}>
          <IndividualVideoReactPlayerDetailHeading>
            {title}
          </IndividualVideoReactPlayerDetailHeading>
          <IndividualVideoReactPlayerDetailDescription>
            <IndividualVideoReactPlayerDescription>
              <p style={{ fontSize: "12px", marginRight: "0.3rem" }}>
                {indData.view_count} views
              </p>
              <p style={{ fontSize: "12px" }}>
                {2023 -
                  parseInt(
                    JSON.stringify(indData.published_at).substring(
                      JSON.stringify(indData.published_at).length - 5
                    )
                  )}{" "}
                years ago
              </p>
            </IndividualVideoReactPlayerDescription>
            <IndividualVideoReactPlayerLikeContainer>
              <IndividualActionContainer
                text="Like"
                isClicked={likeValue()}
                handleActionItem={handleLike}
                iconsFont={faThumbsUp}
              />
              <IndividualActionContainer
                text="DisLike"
                isClicked={individualDislike}
                handleActionItem={handledisLike}
                iconsFont={faThumbsDown}
              />
              <IndividualActionContainer
                text="Save"
                isClicked={individualSaveVideo}
                handleActionItem={handleSaveVideo}
                iconsFont={faVideo}
              />
            </IndividualVideoReactPlayerLikeContainer>
          </IndividualVideoReactPlayerDetailDescription>
          <IndividualVideComponentline></IndividualVideComponentline>
          <IndividualCompDetailed>
            <IndividualCompDetaileddivimg>
              <IndividualCompDetailedimg
                src={channel.profile_image_url}
                alt="Profilelogo"
              ></IndividualCompDetailedimg>
            </IndividualCompDetaileddivimg>
            {descriptionFunction()}
          </IndividualCompDetailed>
        </IndividualVideoReactPlayerDetail>
      </IndividualVideoContainer>
    );
  })
);

export default IndividualVideoDataMain;
