import {
  faFireFlameCurved,
  faGamepad,
  faHome,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { inject, observer } from "mobx-react";
import { useTranslation } from "react-i18next";
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
    const { t } = useTranslation();
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
          text={t("home")}
          isActive={globalStore.status === HOME ? true : false}
        />
        <SidebarMenuIcon
          icons={faFireFlameCurved}
          handleClickSidebarIcon={handleSideIconTrend}
          text={t("trend")}
          isActive={globalStore.status === TREND ? true : false}
        />
        <SidebarMenuIcon
          icons={faGamepad}
          handleClickSidebarIcon={handleSideIconGame}
          text={t("game")}
          isActive={globalStore.status === GAME ? true : false}
        />
        <SidebarMenuIcon
          icons={faVideo}
          handleClickSidebarIcon={handleSideIconSaved}
          text={t("saved")}
          isActive={globalStore.status === SAVED ? true : false}
        />
      </SideBarIconContainer>
    );
  })
);

export default SiderbarIcon;
