import { inject, observer } from "mobx-react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalStore } from "../../../stores/GlobalStore";
import { VideoDetailInterface } from "../../../stores/type";
import { VideoStore } from "../../../stores/VideoStore";
import {
  HomeDataContddivImg,
  HomeDataContdImg,
  HomeDataContSec,
  HomeDataContSecFirst,
  HomeDataContSecSecond,
  HomeDataContSecondContainerFirst,
  HomeDataContSecondContainerSecondd,
  HomeDataContSec23,
  HomeDataContSecondContainerFirstHeading,
  HomeDataContSecimg,
  HomeDataContdIndividualDiv,
} from "../StyledComponent";
interface HomeDataContainerProps {
  item: VideoDetailInterface;
}

interface InjectedHomeDataContainerProps extends HomeDataContainerProps {
  globalStore: GlobalStore;
  videoStore: VideoStore;
}
const HomeDataContainer = inject(
  "globalStore",
  "videoStore"
)(
  observer((props: HomeDataContainerProps) => {
    const { item } = props;
    const { globalStore: theme, videoStore } =
      props as InjectedHomeDataContainerProps;
    return (
      <HomeDataContdIndividualDiv>
        <Link to={`/videos/${item.id}`} style={{ textDecoration: "none" }}>
          <HomeDataContddivImg>
            <HomeDataContdImg
              src={item.thumbnail_url}
              alt="pho"
            ></HomeDataContdImg>
          </HomeDataContddivImg>
          <HomeDataContSec>
            <HomeDataContSecFirst>
              <HomeDataContSecimg
                src={item.channel.profile_image_url}
              ></HomeDataContSecimg>
            </HomeDataContSecFirst>
            <HomeDataContSecSecond>
              <HomeDataContSecondContainerFirst fcolr={theme.themes}>
                <HomeDataContSecondContainerFirstHeading>
                  {item.title}
                </HomeDataContSecondContainerFirstHeading>
              </HomeDataContSecondContainerFirst>
              <HomeDataContSecondContainerSecondd fcolr={theme.themes}>
                <p style={{ fontSize: "12px" }}>{item.channel.name}</p>
                <HomeDataContSec23>
                  <p style={{ fontSize: "12px" }}>{item.view_count} views</p>
                  <p style={{ fontSize: "12px" }}>
                    {2023 -
                      parseInt(
                        JSON.stringify(item.published_at).substring(
                          JSON.stringify(item.published_at).length - 5
                        )
                      )}{" "}
                    years ago
                  </p>
                </HomeDataContSec23>
              </HomeDataContSecondContainerSecondd>
            </HomeDataContSecSecond>
          </HomeDataContSec>
        </Link>
      </HomeDataContdIndividualDiv>
    );
  })
);

export default HomeDataContainer;
