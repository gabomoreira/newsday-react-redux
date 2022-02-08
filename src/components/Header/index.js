import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Sidebar from "../Sidebar";
import { HeaderContainer, HeaderLogo, HeaderMenu } from "./HeaderStyles";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const openAndCloseMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <HeaderContainer>
      <HeaderLogo>
        <NewspaperIcon />
        <Link to="/">News Day</Link>
      </HeaderLogo>
      <HeaderMenu>
        <MenuIcon onClick={openAndCloseMenu} />
      </HeaderMenu>

      {activeMenu && (
        <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      )}
    </HeaderContainer>
  );
};

export default Header;
