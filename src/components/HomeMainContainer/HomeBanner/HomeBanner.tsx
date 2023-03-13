import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStore } from "../../../stores/GlobalStore";
import Logo from "../../Logo";
import {
  HomeBannerCross,
  HomeMainContainerbanner,
  HomeMainContainerbannerbtn,
  HomeMainContainerbannerpara,
} from "../StyledComponent";
interface HomeBanner {}

interface InjectedHomeBannerProps {
  globalStore: GlobalStore;
}
const HomeBanner = inject("globalStore")(
  observer((props: HomeBanner) => {
    const { globalStore: theme } = props as InjectedHomeBannerProps;
    const handleBannerCross = () => {
      theme.setCrossBanner();
    };
    return (
      <>
        {theme.hasCrossBanner && (
          <HomeMainContainerbanner>
            <Logo
              logoStyles={{
                width: "150px",
                marginTop: "2rem",
                marginBottom: "1rem",
              }}
              src1="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt1="logo"
            />
            <HomeMainContainerbannerpara>
              Buy Nxt Watch Premium plans with UPI
            </HomeMainContainerbannerpara>
            <HomeMainContainerbannerbtn>GET IT NOW</HomeMainContainerbannerbtn>
            <HomeBannerCross onClick={handleBannerCross}>
              <FontAwesomeIcon icon={faXmark} />
            </HomeBannerCross>
          </HomeMainContainerbanner>
        )}
      </>
    );
  })
);

export default HomeBanner;
