import React from "react";
import { SocailMediaIcon, SocailMediaImage } from "./StyledComponent";
interface SocialMediaProps {
  imgSrc: string;
  imgAlt: string;
}
const SocialMediaIcon = (props: SocialMediaProps) => {
  const { imgSrc, imgAlt } = props;
  return (
    <SocailMediaIcon>
      <SocailMediaImage src={imgSrc} alt={imgAlt}></SocailMediaImage>
    </SocailMediaIcon>
  );
};

export default SocialMediaIcon;
