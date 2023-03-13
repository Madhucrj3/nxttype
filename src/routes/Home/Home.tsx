import { observer } from "mobx-react";
import HomeMainContainer from "../../components/HomeMainContainer";
import withNavbarSidebarhoc from "../../hocs/withNavbarSidebarhoc";

const Home = () => {
  return (
    <>
      <HomeMainContainer />
    </>
  );
};
export default withNavbarSidebarhoc(Home);
