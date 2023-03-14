import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import {
  FailureMain,
  FailureMainButton,
  FailureMainContainer,
  FailureMainHeading,
  FailureMainImg,
  FailureMainImgContainer,
  FailureMainDescription,
} from "./styledComponent";
interface Failureprops {
  src: string;
  alt: string;
  retryPage: () => void;
  heading: string;
  description: string;
}
interface InjectedFailureProps extends Failureprops {
  globalStore: GlobalStore;
}
const Failure = inject("globalStore")(
  observer((props: Failureprops) => {
    const { src, alt, retryPage, heading, description } = props;
    const { globalStore: globalVar } = props as InjectedFailureProps;
    const handleretry = () => {
      retryPage();
    };

    return (
      <FailureMainContainer heightContainer={globalVar.hasCrossBanner}>
        <FailureMain
          colored={globalVar.themes}
          backgroundColored={globalVar.themes}
        >
          <FailureMainImgContainer>
            <FailureMainImg src={src} alt={alt}></FailureMainImg>
          </FailureMainImgContainer>
          <FailureMainHeading>{heading}</FailureMainHeading>
          <FailureMainDescription>{description}</FailureMainDescription>
          <FailureMainButton onClick={handleretry}>Retry</FailureMainButton>
        </FailureMain>
      </FailureMainContainer>
    );
  })
);

export default Failure;
