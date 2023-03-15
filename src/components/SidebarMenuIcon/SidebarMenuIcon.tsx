import { inject, observer } from "mobx-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { GlobalStore } from "../../stores/GlobalStore";
import { LIGHT } from "../../constants/GlobalData";
import { SidebarIcon, SideBarspan } from "./SiderbarMenuIconStyledComp";
interface SidebarMenuIconProps {
  icons: IconDefinition;
  handleClickSidebarIcon(): void;
  text: string;
  isActive: boolean;
}
interface InjectedSidebarMenuIconProps extends SidebarMenuIconProps {
  globalStore: GlobalStore;
}
const SidebarMenuIcon = inject("globalStore")(
  observer((props: SidebarMenuIconProps) => {
    const { icons, handleClickSidebarIcon, text, isActive } = props;
    const { globalStore: theme } = props as InjectedSidebarMenuIconProps;
    const handlesideicon = () => {
      handleClickSidebarIcon();
    };
    return (
      <SidebarIcon
        activeStatus={isActive}
        themed={theme.themes}
        onClick={handlesideicon}
      >
        <FontAwesomeIcon
          icon={icons}
          style={{
            color: isActive ? "red" : theme.themes === LIGHT ? "#000" : "#fff",
          }}
        />
        <SideBarspan themed={theme.themes} activeStatus={isActive}>
          {text}
        </SideBarspan>
      </SidebarIcon>
    );
  })
);

export default SidebarMenuIcon;
