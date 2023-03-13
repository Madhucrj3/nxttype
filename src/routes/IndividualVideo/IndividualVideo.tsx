import React from "react";
import IndividualVideoMain from "../../components/IndividualVideoMain";
import withNavbarSidebarhoc from "../../hocs/withNavbarSidebarhoc";

const IndividualVideo = () => {
  return (
    <>
      <IndividualVideoMain />
    </>
  );
};

export default withNavbarSidebarhoc(IndividualVideo);
