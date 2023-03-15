import React from "react";
import { inject, observer } from "mobx-react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VideoStore } from "../../stores/VideoStore";
import {
  HomePageSearchContainer,
  HomePageSearchImageContainer,
  HomeSearchInput,
} from "../HomeMainContainer/StyledComponent";
interface HomeSearchBarProps {}
interface InjectedHomeSearchBarProps {
  videoStore: VideoStore;
}
const HomePageSearchBar = inject("videoStore")(
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
        <HomePageSearchContainer>
          <HomeSearchInput
            placeholder="Search"
            value={videoStore.homeSearch}
            onChange={handleHomeSearchBar}
          ></HomeSearchInput>
          <HomePageSearchImageContainer onClick={handleSearchHome}>
            <FontAwesomeIcon icon={faSearch} />
          </HomePageSearchImageContainer>
        </HomePageSearchContainer>
      </>
    );
  })
);

export default HomePageSearchBar;
