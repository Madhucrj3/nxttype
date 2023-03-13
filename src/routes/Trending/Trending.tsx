import TrendingMainContainer from "../../components/TrendingMainContainer";
import withNavbarSidebarhoc from "../../hocs/withNavbarSidebarhoc";

const Trending = () => {
  return (
    <>
      <TrendingMainContainer />
    </>
  );
};

export default withNavbarSidebarhoc(Trending);
