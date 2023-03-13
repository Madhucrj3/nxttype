import SiderbarIcon from '../Siderbaricon';
import { inject, observer } from 'mobx-react';
import { GlobalStore } from '../../stores/GlobalStore';
import SocialMediaIcon from '../SocialMediaIcon';
import { SidebarContactUsHeading, SidebarMenu, SidebarMenuSecContainer, SidebarParaGraph, SideBarSocialMedia } from './SideBarStyledComponent';

interface InjectedSiderbarProps{

}
interface InjectedSideBarContainerProps extends InjectedSiderbarProps{
    globalStore: GlobalStore;
  }
const SideBarContainer = inject("globalStore")(observer((props: InjectedSiderbarProps) =>  {
   const {globalStore:val}=props as InjectedSideBarContainerProps ;
  return (
    <SidebarMenu theme={val.themes}>
      <SiderbarIcon />
      <SidebarMenuSecContainer>
      <SidebarContactUsHeading>CONTACT US</SidebarContactUsHeading>
      <SideBarSocialMedia>
        <SocialMediaIcon imgSrc="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" imgAlt="face"/>
        <SocialMediaIcon imgSrc="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png" imgAlt="twitt"/>
        <SocialMediaIcon imgSrc="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" imgAlt="link"/>
      </SideBarSocialMedia>
      <SidebarParaGraph>Enjoy! Now to see our channels and recommendations</SidebarParaGraph>
      </SidebarMenuSecContainer>
    </SidebarMenu>
  )
})
)

export default SideBarContainer