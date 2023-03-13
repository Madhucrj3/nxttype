import {
  faThumbsDown,
  faThumbsUp,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toJS } from "mobx";
import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import ReactPlayer from "react-player";
import { LIGHT } from "../../../constants/GlobalData";
import { GlobalStore } from "../../../stores/GlobalStore";
import { IndividualVideoDetailInterface } from "../../../stores/type";
import { VideoStore } from "../../../stores/VideoStore";
import {
  HomeDataContSec23,
  IndividualCompDetailed,
  IndividualCompDetaileddivimg,
  IndividualCompDetailedimg,
  IndividualCompDetailedmain,
  IndividualVidecompoline,
  IndividualVideodiv,
  IndividualVideoREact,
  IndividualVideoREactDetail,
  IndividualVideoREactDetail2div,
  IndividualVideoREactDetail2divlike,
  IndividualVideoREactDetail2divlikecontd,
  IndividualVideoREactDetailh1,
} from "../StyledComponent";
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
    const [indlike, setindlike] = useState(false);
    const [inddislike, setinddislike] = useState(false);
    const [indsavevideo, setindsavevideo] = useState(false);
    const { setLikeVideo, setDisLikeVideo, setSaveVideo } = videoStore;
    useEffect(() => {
      if (id != undefined) {
        videoStore.handleLikeuse(id);
        videoStore.handledislikeuse(id);
        videoStore.handlesavevideouse(indData);
      }
    }, []);

    const handleLike = () => {
      setLikeVideo(indData.id);
      //console.log("Handle Like", new Date().getMilliseconds());
      if (id != undefined && videoStore.handleLikeuse(id)) {
        setindlike(true);
        setinddislike(false);
      }
    };
    const handledisLike = () => {
      setDisLikeVideo(indData.id);
      if (id != undefined && videoStore.handledislikeuse(id)) {
        setindlike(false);
        setinddislike(true);
      }
    };
    const handleSaveVideo = () => {
      setSaveVideo(indData);
      if (id != undefined && videoStore.handlesavevideouse(indData)) {
        setindsavevideo(true);
      } else setindsavevideo(false);
    };
    console.log(">>>>>>>>>>>>>>>>>>Individual Video<<<<<<<<<<<<<<<<<<<<");
    return (
      <IndividualVideodiv>
        <IndividualVideoREact>
          <ReactPlayer
            url={indData.video_url}
            width="auto"
            height="100%"
            controls={true}
          />
        </IndividualVideoREact>
        <IndividualVideoREactDetail colors={globalData.themes}>
          <IndividualVideoREactDetailh1>
            {indData.title}
          </IndividualVideoREactDetailh1>
          <IndividualVideoREactDetail2div>
            <HomeDataContSec23>
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
            </HomeDataContSec23>
            <IndividualVideoREactDetail2divlikecontd>
              <IndividualVideoREactDetail2divlike>
                <FontAwesomeIcon
                  icon={faThumbsUp}
                  onClick={handleLike}
                  style={{
                    color:
                      indlike === true
                        ? "blue"
                        : globalData.themes === LIGHT
                        ? "000"
                        : "fff",
                  }}
                />
                <span
                  style={{
                    marginLeft: "0.3rem",
                    color:
                      indlike === true
                        ? "blue"
                        : globalData.themes === LIGHT
                        ? "000"
                        : "fff",
                  }}
                  onClick={handleLike}
                >
                  Like
                </span>
              </IndividualVideoREactDetail2divlike>
              <IndividualVideoREactDetail2divlike>
                <FontAwesomeIcon
                  icon={faThumbsDown}
                  onClick={handledisLike}
                  style={{
                    color:
                      inddislike === true
                        ? "blue"
                        : globalData.themes === LIGHT
                        ? "000"
                        : "fff",
                  }}
                />
                <span
                  style={{
                    marginLeft: "0.3rem",
                    color:
                      inddislike === true
                        ? "blue"
                        : globalData.themes === LIGHT
                        ? "000"
                        : "fff",
                  }}
                  onClick={handledisLike}
                >
                  Dislike
                </span>
              </IndividualVideoREactDetail2divlike>
              <IndividualVideoREactDetail2divlike>
                <FontAwesomeIcon
                  icon={faVideo}
                  onClick={handleSaveVideo}
                  style={{
                    color:
                      indsavevideo === true
                        ? "blue"
                        : globalData.themes === LIGHT
                        ? "000"
                        : "fff",
                  }}
                />
                <span
                  style={{
                    marginLeft: "0.3rem",
                    color:
                      indsavevideo === true
                        ? "blue"
                        : globalData.themes === LIGHT
                        ? "000"
                        : "fff",
                  }}
                  onClick={handleSaveVideo}
                >
                  save
                </span>
              </IndividualVideoREactDetail2divlike>
            </IndividualVideoREactDetail2divlikecontd>
          </IndividualVideoREactDetail2div>
          <IndividualVidecompoline></IndividualVidecompoline>
          <IndividualCompDetailed>
            <IndividualCompDetaileddivimg>
              <IndividualCompDetailedimg
                src={indData.channel.profile_image_url}
                alt="detlogo"
              ></IndividualCompDetailedimg>
            </IndividualCompDetaileddivimg>
            <IndividualCompDetailedmain>
              <h5>{indData.channel.name}</h5>
              <p>{indData.channel.subscriber_count} subscribers</p>
              <p>{indData.description}</p>
            </IndividualCompDetailedmain>
          </IndividualCompDetailed>
        </IndividualVideoREactDetail>
      </IndividualVideodiv>
    );
  })
);

export default IndividualVideoDataMain;
