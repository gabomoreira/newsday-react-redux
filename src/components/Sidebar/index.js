import React, { useState } from "react";
import { SidebarContainer, SidebarLink, SidebarNav } from "./SidebarStyles";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const closeMenu = () => {
    setActiveMenu(!activeMenu);
  };

  return (
    <SidebarContainer active={activeMenu}>
      <SidebarNav>
        <Link to="/" onClick={closeMenu}>
          Início
        </Link>
        <Link to="/news/bbb" onClick={closeMenu}>
          BBB 22
        </Link>
        <Link to="/news/tecnologia" onClick={closeMenu}>
          Tecnologia
        </Link>
        <Link to="/news/ciencia" onClick={closeMenu}>
          Ciência
        </Link>
        <Link to="/news/saude" onClick={closeMenu}>
          Saúde
        </Link>
        <Link to="/news/educacao" onClick={closeMenu}>
          Educação
        </Link>
        <Link to="/news/musica" onClick={closeMenu}>
          Música
        </Link>
        <Link to="/news/politica" onClick={closeMenu}>
          Política
        </Link>
        <Link to="/news/economia" onClick={closeMenu}>
          Economia
        </Link>
        <Link to="/news/anime" onClick={closeMenu}>
          Animes
        </Link>
      </SidebarNav>
    </SidebarContainer>
  );
};

export default Sidebar;
