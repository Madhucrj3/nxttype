import { inject, observer } from "mobx-react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GlobalStore } from "../../stores/GlobalStore";
import {
  IndividualVideoReactPlayerActionContainer,
  IndividualVideoReactPlayerActionName,
  IndividualVideoReactPlayerAction,
} from "../IndividualVideoMain/styledComponent";
interface IndividualActionContainerProps {
  text: string;
  handleActionItem(): void;
  isClicked: boolean;
  iconsFont: IconDefinition;
}
interface InjectedIndividualActionContainerProps
  extends IndividualActionContainerProps {
  globalStore: GlobalStore;
}
const IndividualActionContainer = inject("globalStore")(
  observer((props: IndividualActionContainerProps) => {
    const { text, handleActionItem, isClicked, iconsFont } = props;
    const { globalStore: globalData } =
      props as InjectedIndividualActionContainerProps;
    const handleClick = () => {
      handleActionItem();
    };
    return (
      <IndividualVideoReactPlayerAction>
        <IndividualVideoReactPlayerActionContainer
          theme={globalData.themes}
          handleClicked={isClicked}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={iconsFont} />
          <IndividualVideoReactPlayerActionName>
            {text}
          </IndividualVideoReactPlayerActionName>
        </IndividualVideoReactPlayerActionContainer>
      </IndividualVideoReactPlayerAction>
    );
  })
);

export default IndividualActionContainer;
