import styled from "styled-components";

export const SidebarContainer = styled.div`
  background: #14213d;
  position: fixed;
  top: 13vh;
  right: 20px;
  width: 10rem;
  display: ${({ activeMenu }) => (activeMenu ? "none" : "block")};
  border-radius: 8px;
  overflow: hidden;

  > .MuiSvgIcon-root {
    font-size: 2.2rem;
    color: #fff;
    margin: 20px;
    cursor: pointer;
  }
`;

export const SidebarNav = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;

  > a {
    font-size: 1.2rem;
    color: #fff;
    padding: 5px 10px;
    cursor: pointer;
    text-decoration: none;

    :hover {
      background: #3d405b;
    }
  }
`;
