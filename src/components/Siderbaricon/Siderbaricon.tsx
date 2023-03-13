import {
  faFireFlameCurved,
  faGamepad,
  faHome,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { inject, observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LIGHT } from "../../constants/GlobalData";
import { GAME, HOME, SAVED, TREND } from "../../constants/SideBarStatus";
import { GlobalStore } from "../../stores/GlobalStore";
import SidebarMenuIcon from "../SidebarMenuIcon";
const Handlesideiconsaved = styled.div`
  background-color: ${(props) =>
    props.theme === LIGHT ? "#fff" : "#313131"} !important;
`;
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
      <Handlesideiconsaved theme={globalStore.themes}>
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
      </Handlesideiconsaved>
    );
  })
);

export default SiderbarIcon;
