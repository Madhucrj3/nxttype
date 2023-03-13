import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import Logo from "../Logo";
import Siderbaricon from "../Siderbaricon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import Modal, { Styles } from "react-modal";
import "reactjs-popup/dist/index.css";
import {
  DropdownContent,
  NavbarContainer,
  NavbarContainerLeft,
  NavbarContainerLogoutbutton,
  NavbarContainerMain,
  NavbarContainerRight,
  NavbarContainerRightMobileView,
  NavbarContainerRightMobileViewCurr,
  NavbarDropdown,
} from "./NavbarStyld";
import { inject, observer } from "mobx-react";
import { GlobalStore } from "../../stores/GlobalStore";
import { LIGHT } from "../../constants/GlobalData";
import PopUps from "../PopUps";
import customStyles from "../../utils/CustomStyle";
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
    console.log(theme.themes);
    return (
      <NavbarContainer
        backgroundColorTheme={theme.themes === LIGHT ? "000" : "#313131"}
      >
        <NavbarContainerMain>
          <NavbarContainerLeft>
            <Logo
              logoStyles={{ width: "120px", cursor: "pointer" }}
              handleClicklogo={handleNavbarLogoClick}
              src1={
                theme.themes === LIGHT
                  ? "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  : "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
              }
              alt1="gflogo"
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
                theme.themes === LIGHT
                  ? "https://res.cloudinary.com/dqgpcuxoj/image/upload/v1676033047/moon_1_shovyh.png"
                  : "https://res.cloudinary.com/dqgpcuxoj/image/upload/v1676290605/pattern_2_1_cvjuxo.svg"
              }
              alt1="shift"
            />
            <NavbarContainerLogoutbutton>
              <Logo
                logoStyles={{
                  width: "30px",
                  height: "30px",
                  padding: "0 1rem",
                }}
                src1="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt1="plogo"
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
            </NavbarContainerLogoutbutton>
            <NavbarContainerRightMobileView>
              <NavbarContainerRightMobileViewCurr>
                <NavbarDropdown>
                  <FontAwesomeIcon
                    icon={faBars}
                    style={{
                      width: "30px",
                      height: "30px",
                      color: theme.themes === LIGHT ? "#000" : "#fff",
                    }}
                  />
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
                  style={{
                    width: "30px",
                    height: "30px",
                    color: theme.themes === LIGHT ? "#000" : "#fff",
                  }}
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
