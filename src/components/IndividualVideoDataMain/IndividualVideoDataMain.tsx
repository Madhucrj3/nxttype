import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsDown,
  faThumbsUp,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import { GlobalStore } from "../../stores/GlobalStore";
import { IndividualVideoDetailInterface } from "../../stores/type";
import { VideoStore } from "../../stores/VideoStore";

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
  IndividualVideoReactPlayerLike,
  IndividualVideoReactPlayerLikeContainer,
  IndividualVideoReactPlayerDetailHeading,
  IndividualVideoReactPlayerActionContainer,
  IndividualVideoReactPlayerActionName,
} from "../IndividualVideoMain/StyledComponent";

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
    const [individualLike, setindividualLike] = useState(false);
    const [individualDislike, setindividualDislike] = useState(false);
    const [individualSaveVideo, setindividualSaveVideo] = useState(false);
    const { setLikeVideo, setDisLikeVideo, setSaveVideo } = videoStore;
    useEffect(() => {
      if (id !== undefined) {
        if (videoStore.handleLikeInStore(id)) {
          setindividualLike(true);
          setindividualDislike(false);
        }
        if (videoStore.handledislikeInStore(id)) {
          setindividualLike(false);
          setindividualDislike(true);
        }
        if (videoStore.handlesavevideoInStore(indData)) {
          setindividualSaveVideo(true);
        }
      }
    }, []);

    const handleLike = () => {
      setLikeVideo(indData.id);
      console.log("liked");
      if (id !== undefined && videoStore.handleLikeInStore(id)) {
        setindividualLike(true);
        setindividualDislike(false);
      } else {
        setindividualLike(false);
        setindividualDislike(false);
      }
    };
    const handledisLike = () => {
      console.log("disliked");
      setDisLikeVideo(indData.id);
      if (id !== undefined && videoStore.handledislikeInStore(id)) {
        setindividualDislike(true);
        setindividualLike(false);
      } else {
        setindividualDislike(false);
        setindividualLike(false);
      }
    };
    const handleSaveVideo = () => {
      setSaveVideo(indData);
      if (id !== undefined && videoStore.handlesavevideoInStore(indData)) {
        setindividualSaveVideo(true);
      } else setindividualSaveVideo(false);
    };
    console.log("Like" + individualLike);
    console.log("DisLike" + individualDislike);
    const likeValue = () => {
      console.log("like value called");
      return individualLike;
    };
    return (
      <IndividualVideoContainer>
        <IndividualVideoReactPlayer>
          <ReactPlayer
            url={indData.video_url}
            width="auto"
            height="100%"
            controls={true}
          />
        </IndividualVideoReactPlayer>
        <IndividualVideoReactPlayerDetail colors={globalData.themes}>
          <IndividualVideoReactPlayerDetailHeading>
            {indData.title}
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
              <IndividualVideoReactPlayerLike>
                <IndividualVideoReactPlayerActionContainer
                  theme={globalData.themes}
                  isLikedClicked={likeValue()}
                  onClick={handleLike}
                >
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <IndividualVideoReactPlayerActionName>
                    Like
                  </IndividualVideoReactPlayerActionName>
                </IndividualVideoReactPlayerActionContainer>
              </IndividualVideoReactPlayerLike>
              <IndividualVideoReactPlayerLike>
                <IndividualVideoReactPlayerActionContainer
                  onClick={handledisLike}
                  theme={globalData.themes}
                  isLikedClicked={individualDislike}
                >
                  <FontAwesomeIcon icon={faThumbsDown} />
                  <IndividualVideoReactPlayerActionName>
                    Dislike
                  </IndividualVideoReactPlayerActionName>
                </IndividualVideoReactPlayerActionContainer>
              </IndividualVideoReactPlayerLike>
              <IndividualVideoReactPlayerLike>
                <IndividualVideoReactPlayerActionContainer
                  onClick={handleSaveVideo}
                  theme={globalData.themes}
                  isLikedClicked={individualSaveVideo}
                >
                  <FontAwesomeIcon icon={faVideo} />
                  <IndividualVideoReactPlayerActionName>
                    save
                  </IndividualVideoReactPlayerActionName>
                </IndividualVideoReactPlayerActionContainer>
              </IndividualVideoReactPlayerLike>
            </IndividualVideoReactPlayerLikeContainer>
          </IndividualVideoReactPlayerDetailDescription>
          <IndividualVideComponentline></IndividualVideComponentline>
          <IndividualCompDetailed>
            <IndividualCompDetaileddivimg>
              <IndividualCompDetailedimg
                src={indData.channel.profile_image_url}
                alt="Profilelogo"
              ></IndividualCompDetailedimg>
            </IndividualCompDetaileddivimg>
            <IndividualCompDetailedmain>
              <h5>{indData.channel.name}</h5>
              <p>{indData.channel.subscriber_count} subscribers</p>
              <p>{indData.description}</p>
            </IndividualCompDetailedmain>
          </IndividualCompDetailed>
        </IndividualVideoReactPlayerDetail>
      </IndividualVideoContainer>
    );
  })
);

export default IndividualVideoDataMain;
