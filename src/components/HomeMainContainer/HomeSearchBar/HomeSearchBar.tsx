import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import React, { useState } from "react";
import { VideoStore } from "../../../stores/VideoStore";
import {
  HomeSearchContd,
  HomeSearchImgdiv,
  HomeSearchInput,
} from "../StyledComponent";
interface HomeSearchBarProps {}
interface InjectedHomeSearchBarProps {
  videoStore: VideoStore;
}
const HomeSearchBar = inject("videoStore")(
  observer((props: HomeSearchBarProps) => {
    const { videoStore } = props as InjectedHomeSearchBarProps;
    const handleHomeSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
      videoStore.setHomeSearch(e.target.value);
    };
    const handleSearchHome = () => {
      videoStore.fetchHomeData();
    };
    return (
      <>
        <HomeSearchContd>
          <HomeSearchInput
            placeholder="Search"
            value={videoStore.homeSearch}
            onChange={handleHomeSearchBar}
          ></HomeSearchInput>
          <HomeSearchImgdiv onClick={handleSearchHome}>
            <FontAwesomeIcon icon={faSearch} />
          </HomeSearchImgdiv>
        </HomeSearchContd>
      </>
    );
  })
);

export default HomeSearchBar;
