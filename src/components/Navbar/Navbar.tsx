import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";
import Siderbaricon from "../Siderbaricon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import "reactjs-popup/dist/index.css";
import {
  DropdownContent,
  NavbarContainer,
  NavbarContainerLeft,
  NavbarContainerbutton,
  NavbarContainerMain,
  NavbarContainerRight,
  NavbarContainerRightMobileView,
  NavbarContainerRightMobileViewCurr,
  NavbarDropdown,
} from "./styledComponent";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import { LIGHT } from "../../constants/themes";
import PopUps from "../PopUps";
import customStyles from "../../utils/CustomStyle";
import {
  NAVBAR_DARK_THEME,
  NAVBAR_LIGHT_THEME,
  NXTWATCH_LOGO_DARK,
  NXTWATCH_LOGO_LIGHT,
  PROFILE_IMAGE,
} from "../../constants/ImageUrl";
interface Navbarprops {}
interface InjectedNavbarProps extends Navbarprops {
  globalStore: GlobalStore;
}
const Navbar = inject("globalStore")(
  observer((props: Navbarprops) => {
    const { globalStore: theme } = props as InjectedNavbarProps;
    const navigate = useNavigate();
    const handleChangeTheme = () => {
      theme.setTheme();
    };
    const [modalIsOpen, setIsOpen] = useState(false); //NOTE: Update the name for modal
    const updateLogoutModalStat = (value: boolean) => () => {
      setIsOpen(value);
    };
    const handleNavbarLogoClick = () => {
      navigate("/");
    };
    const handleLogout = () => {
      localStorage.removeItem("token");
      navigate("/login");
    };
    const fontStyle = {
      width: "30px",
      height: "30px",
      color: theme.themes === LIGHT ? "#000" : "#fff",
    };
    return (
      <NavbarContainer backgroundColorTheme={theme.themes}>
        <NavbarContainerMain>
          <NavbarContainerLeft>
            <Logo
              logoStyles={{ width: "120px", cursor: "pointer" }}
              handleClicklogo={handleNavbarLogoClick}
              src1={
                theme.themes === LIGHT
                  ? NXTWATCH_LOGO_LIGHT
                  : NXTWATCH_LOGO_DARK
              }
              alt1="Navbarlogo"
            />
          </NavbarContainerLeft>
          <NavbarContainerRight>
            <Logo
              logoStyles={{
                width: "30px",
                height: "30px",
                padding: "0 1rem",
                cursor: "pointer",
              }}
              handleClicklogo={handleChangeTheme}
              src1={
                theme.themes === LIGHT ? NAVBAR_LIGHT_THEME : NAVBAR_DARK_THEME
              }
              alt1="Theme"
            />
            <NavbarContainerbutton>
              <Logo
                logoStyles={{
                  width: "30px",
                  height: "30px",
                  padding: "0 1rem",
                }}
                src1={PROFILE_IMAGE}
                alt1="ProfileImage"
              />
              <Button
                text="Logout"
                btnstyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #4f46e5",
                  borderRadius: "3px",
                  height: "30px",
                  width: "65px",

                  cursor: "pointer",
                  color: "#4f46e5",
                }}
                handleOnClick={updateLogoutModalStat(true)}
              />
            </NavbarContainerbutton>
            <NavbarContainerRightMobileView>
              <NavbarContainerRightMobileViewCurr>
                <NavbarDropdown>
                  <FontAwesomeIcon icon={faBars} style={fontStyle} />
                  <DropdownContent>
                    <Siderbaricon />
                  </DropdownContent>
                </NavbarDropdown>
              </NavbarContainerRightMobileViewCurr>
              <NavbarContainerRightMobileViewCurr
                onClick={updateLogoutModalStat(true)}
              >
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  style={fontStyle}
                />
              </NavbarContainerRightMobileViewCurr>
            </NavbarContainerRightMobileView>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={updateLogoutModalStat(false)}
              style={customStyles(theme.themes)}
              contentLabel="Logout Modal"
            >
              <PopUps
                closeModal={updateLogoutModalStat(false)}
                handleLogout={handleLogout}
              />
            </Modal>
          </NavbarContainerRight>
        </NavbarContainerMain>
      </NavbarContainer>
    );
  })
);

export default Navbar;
