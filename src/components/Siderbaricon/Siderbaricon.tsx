import {
  faFireFlameCurved,
  faGamepad,
  faHome,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { inject, observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { GAME, HOME, SAVED, TREND } from "../../constants/MenuItem";
import { GlobalStore } from "../../stores/GlobalStore";
import SidebarMenuIcon from "../SidebarMenuIcon";
import { SideBarIconContainer } from "./styledComponent";
interface Siderbariconprops {}
interface InjectedSiderbariconProps extends Siderbariconprops {
  globalStore: GlobalStore;
}
const SiderbarIcon = inject("globalStore")(
  observer((props: Siderbariconprops) => {
    const navigate = useNavigate();
    const { globalStore } = props as InjectedSiderbariconProps;
    console.log(globalStore);
    const handleSideIconhHome = () => {
      globalStore.setStatus(HOME);
      navigate("/");
    };
    const handleSideIconTrend = () => {
      globalStore.setStatus(TREND);
      navigate("/trending");
    };
    const handleSideIconGame = () => {
      globalStore.setStatus(GAME);
      navigate("/gaming");
    };
    const handleSideIconSaved = () => {
      globalStore.setStatus(SAVED);
      navigate("/saveVideo");
    };
    return (
      <SideBarIconContainer theme={globalStore.themes}>
        <SidebarMenuIcon
          icons={faHome}
          handleClickSidebarIcon={handleSideIconhHome}
          text="Home"
          isActive={globalStore.status === HOME ? true : false}
        />
        <SidebarMenuIcon
          icons={faFireFlameCurved}
          handleClickSidebarIcon={handleSideIconTrend}
          text="Trending"
          isActive={globalStore.status === TREND ? true : false}
        />
        <SidebarMenuIcon
          icons={faGamepad}
          handleClickSidebarIcon={handleSideIconGame}
          text="Gaming"
          isActive={globalStore.status === GAME ? true : false}
        />
        <SidebarMenuIcon
          icons={faVideo}
          handleClickSidebarIcon={handleSideIconSaved}
          text="Saved Video"
          isActive={globalStore.status === SAVED ? true : false}
        />
      </SideBarIconContainer>
    );
  })
);

export default SiderbarIcon;
