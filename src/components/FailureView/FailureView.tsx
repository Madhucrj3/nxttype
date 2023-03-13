import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import {
  Failuremain,
  Failuremainbtn,
  FailureMainContainer,
  FailureMainHeading,
  FailureMainImg,
  FailureMainImgContainer,
  FailureMainDescription,
} from "./FailureStyled";
interface Failureprops {
  src: string;
  alt: string;
  page: () => void;
  heading: string;
  description: string;
}
interface InjectedFailureProps extends Failureprops {
  globalStore: GlobalStore;
}
const Failure = inject("globalStore")(
  observer((props: Failureprops) => {
    const { src, alt, page, heading, description } = props;
    const { globalStore: globalVar } = props as InjectedFailureProps;
    const handleretry = () => {
      page();
    };

    return (
      <FailureMainContainer
        style={{ height: globalVar.hasCrossBanner === false ? "100%" : "45vh" }}
      >
        <Failuremain
          colored={globalVar.themes}
          backgroundColored={globalVar.themes}
        >
          <FailureMainImgContainer>
            <FailureMainImg src={src} alt={alt}></FailureMainImg>
          </FailureMainImgContainer>
          <FailureMainHeading>{heading}</FailureMainHeading>
          <FailureMainDescription>{description}</FailureMainDescription>
          <Failuremainbtn onClick={handleretry}>Retry</Failuremainbtn>
        </Failuremain>
      </FailureMainContainer>
    );
  })
);

export default Failure;
