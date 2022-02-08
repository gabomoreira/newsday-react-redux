import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  background-color: #14213d;
  height: 8vh;
  padding: 10px 7%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;

  > a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    margin-left: 0.5rem;
  }
`;

export const HeaderMenu = styled.div`
  border: none;
  background: transparent;

  > .MuiSvgIcon-root {
    font-size: 2.2rem !important;
    color: #fff !important;
    cursor: pointer;
  }
`;
