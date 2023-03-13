import React from 'react'
import styled from 'styled-components';
const ImageContainerLogo=styled.img``;
interface LogoProps{
    logoStyles:React.CSSProperties
    src1:string,
    alt1:string
    handleClicklogo?():void
}
const Logo = (props:LogoProps) => {
    const {logoStyles,src1,alt1,handleClicklogo=()=>{console.log("clicked")}}=props;
    const handleClick=()=>{
      handleClicklogo();
    }
  return (
        <ImageContainerLogo style={logoStyles} src={src1} alt={alt1} onClick={handleClick}/>
  )
}

export default Logo