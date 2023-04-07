import { inject, observer } from "mobx-react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalStore } from "../../stores/GlobalStore";
import { NXTWATCH_LOGO_LIGHT } from "../../constants/ImageUrl";
import Logo from "../Logo";
import {
  HomeBannerCross,
  HomeMainContainerbanner,
  HomeMainContainerbannerbtn,
  HomeMainContainerbannerpara,
} from "../HomeMainContainer/styledComponent";
interface HomeBanners {}

interface InjectedHomeBannerProps {
  globalStore: GlobalStore;
}
const HomeBanner = inject("globalStore")(
  observer((props: HomeBanners) => {
    const { globalStore: theme } = props as InjectedHomeBannerProps;
    const handleBannerCross = () => {
      console.log("4rfe");
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
              src1={NXTWATCH_LOGO_LIGHT}
              alt1="logo"
            />
            <HomeMainContainerbannerpara>
              Buy Nxt Watch Premium plans with UPI
            </HomeMainContainerbannerpara>
            <HomeMainContainerbannerbtn>GET IT NOW</HomeMainContainerbannerbtn>
            <HomeBannerCross data-testid="icon" onClick={handleBannerCross}>
              <FontAwesomeIcon icon={faXmark} />
            </HomeBannerCross>
          </HomeMainContainerbanner>
        )}
      </>
    );
  })
);

export default HomeBanner;
