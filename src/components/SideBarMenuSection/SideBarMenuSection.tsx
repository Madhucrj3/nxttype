import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import {
  SideMainHeadingContainer,
  SideMainHeadingImageContainer,
  SideMainHeadings,
} from "./styledComponent";
interface SideMainHeadingProps {
  titleName: string;
  iconss: IconDefinition;
}
interface InjectedSideMainHeadingProps extends SideMainHeadingProps {
  globalStore: GlobalStore;
}
const SideBarMenuSection = inject("globalStore")(
  observer((props: SideMainHeadingProps) => {
    const { globalStore: globalvar } = props as InjectedSideMainHeadingProps;
    const { titleName, iconss } = props;
    return (
      <SideMainHeadingContainer>
        <SideMainHeadingImageContainer>
          <FontAwesomeIcon
            icon={iconss}
            style={{ color: "red", height: "30px" }}
          />
        </SideMainHeadingImageContainer>
        <SideMainHeadings colors={globalvar.themes}>
          {titleName}
        </SideMainHeadings>
      </SideMainHeadingContainer>
    );
  })
);

export default SideBarMenuSection;
