import { inject, observer } from "mobx-react";
import TrendingMainContainer from "../../components/TrendingMainContainer";
import { TREND } from "../../constants/MenuItem";
import withNavbarSidebarhoc from "../../hocs/withNavbarSidebarhoc";
import { GlobalStore } from "../../stores/GlobalStore";
interface Trendingprops {}
interface InjectedTrendingProps {
  globalStore: GlobalStore;
}
const Trending = inject("globalStore")(
  observer((props: Trendingprops) => {
    const { globalStore } = props as InjectedTrendingProps;
    globalStore.setStatus(TREND);
    return (
      <>
        <TrendingMainContainer />
      </>
    );
  })
);

export default withNavbarSidebarhoc(Trending);
