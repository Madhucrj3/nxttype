import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { inject, observer } from "mobx-react";
import React from "react";
import { GlobalStore } from "../../stores/GlobalStore";
import {
  IndividualVideoReactPlayerActionContainer,
  IndividualVideoReactPlayerActionName,
  IndividualVideoReactPlayerLike,
} from "../IndividualVideoMain/StyledComponent";
interface IndividualActionContainerProps {
  text: string;
  handleActionItem(): void;
}
interface InjectedIndividualActionContainerProps
  extends IndividualActionContainerProps {
  globalStore: GlobalStore;
}
const IndividualActionContainer = inject("globalStore")(
  observer((props: IndividualActionContainerProps) => {
    const { text, handleActionItem } = props;
    const { globalStore: globalData } =
      props as InjectedIndividualActionContainerProps;
    const handleClick = () => {
      handleActionItem();
    };
    return (
      <IndividualVideoReactPlayerLike>
        <IndividualVideoReactPlayerActionContainer
          theme={globalData.themes}
          isLikedClicked={false}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
          <IndividualVideoReactPlayerActionName>
            {text}
          </IndividualVideoReactPlayerActionName>
        </IndividualVideoReactPlayerActionContainer>
      </IndividualVideoReactPlayerLike>
    );
  })
);

export default IndividualActionContainer;
