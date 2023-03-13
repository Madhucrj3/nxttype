import React from "react";
import { SocIcon, SocImg } from "./StyledComponent";
interface SocialMediaProps {
  imgSrc: string;
  imgAlt: string;
}
const SocialMediaIcon = (props: SocialMediaProps) => {
  const { imgSrc, imgAlt } = props;
  return (
    <SocIcon>
      <SocImg src={imgSrc} alt={imgAlt}></SocImg>
    </SocIcon>
  );
};

export default SocialMediaIcon;
