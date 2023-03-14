import SiderbarIcon from "../Siderbaricon";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import SocialMediaIcon from "../SocialMediaIcon";
import {
  SidebarContactUsHeading,
  SidebarMenu,
  SidebarMenuSecContainer,
  SidebarParaGraph,
  SideBarSocialMedia,
} from "./SideBarStyledComponent";
import { FACEBOOK, LINKEDLIN, TWITTER } from "../../constants/ImageUrl";

interface InjectedSiderbarProps {}
interface InjectedSideBarContainerProps extends InjectedSiderbarProps {
  globalStore: GlobalStore;
}
const SideBarContainer = inject("globalStore")(
  observer((props: InjectedSiderbarProps) => {
    const { globalStore: val } = props as InjectedSideBarContainerProps;
    return (
      <SidebarMenu theme={val.themes}>
        <SiderbarIcon />
        <SidebarMenuSecContainer>
          <SidebarContactUsHeading>CONTACT US</SidebarContactUsHeading>
          <SideBarSocialMedia>
            <SocialMediaIcon imgSrc={FACEBOOK} imgAlt="face" />
            <SocialMediaIcon imgSrc={TWITTER} imgAlt="twitt" />
            <SocialMediaIcon imgSrc={LINKEDLIN} imgAlt="link" />
          </SideBarSocialMedia>
          <SidebarParaGraph>
            Enjoy! Now to see our channels and recommendations
          </SidebarParaGraph>
        </SidebarMenuSecContainer>
      </SidebarMenu>
    );
  })
);

export default SideBarContainer;
