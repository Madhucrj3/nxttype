import { inject, observer } from "mobx-react";
import GamingMainContainer from "../../components/GamingSection";
import withNavbarSidebarhoc from "../../hocs/withNavbarSidebarhoc";
import { GlobalStore } from "../../stores/GlobalStore";
import { GAME } from "../../constants/MenuItem";
import { useEffect } from "react";
interface Gamingprops {}
interface InjectedGamingProps {
  globalStore: GlobalStore;
}
const Gaming = inject("globalStore")(
  observer((props: Gamingprops) => {
    const { globalStore } = props as InjectedGamingProps;
    useEffect(() => {
      globalStore.setStatus(GAME);
    }, []);
    return (
      <>
        <GamingMainContainer />
      </>
    );
  })
);

export default withNavbarSidebarhoc(Gaming);
