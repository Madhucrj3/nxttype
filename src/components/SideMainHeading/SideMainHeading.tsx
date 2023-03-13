import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import React, { useContext } from "react";
import { GlobalStore } from "../../stores/GlobalStore";
import {
  SideMainHeaddiv,
  SideMainHeaddivimg,
  SideMainHeadh1,
} from "./StyledComponent";
interface SideMainHeadingProps {
  titleName: string;
  iconss: IconDefinition;
}
interface InjectedSideMainHeadingProps extends SideMainHeadingProps {
  globalStore: GlobalStore;
}
const SideMainHeading = inject("globalStore")(
  observer((props: SideMainHeadingProps) => {
    const { globalStore: globalvar } = props as InjectedSideMainHeadingProps;
    const { titleName, iconss } = props;
    return (
      <SideMainHeaddiv>
        <SideMainHeaddivimg>
          <FontAwesomeIcon
            icon={iconss}
            style={{ color: "red", height: "30px" }}
          />
        </SideMainHeaddivimg>
        <SideMainHeadh1 colors={globalvar.themes}>{titleName}</SideMainHeadh1>
      </SideMainHeaddiv>
    );
  })
);

export default SideMainHeading;
