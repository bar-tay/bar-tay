import React, { FC } from "react";
import styled from "styled-components";
import logo from "./logos/Logo_grau.png";
import burgerImg from "./logos/menu.png";

const NavSection = styled.section`
  display: flex;
  width: inherit;
  align-items: center;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.36);
  height: 106px;
  position: fixed;
  top: 0;
  z-index: 10;
  @media only screen and (max-width: 921px) {
    justify-content: space-between;
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
  }
`;

const StyledNavbar = styled.nav`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media only screen and (max-width: 929px) {
    display: none;
  }
`;
const BurgerMenu = styled.img`
  @media only screen and (min-width: 930px) {
    display: none;
  }
  width: 50px;
  margin-right: 10px;
`;
const StyledListItem = styled.li`
  font-family: Graphik-Medium;
  font-size: 19px;
  color: #ffffff;
  letter-spacing: -0.23px;
  &:last-child {
    margin-right: 10px;
  }
`;
const Logo = styled.img`
  width: 233px;
  height: 60px;
`;

const Navbar: FC = () => {
  return (
    <NavSection>
      <Logo src={logo}></Logo>
      <StyledNavbar>
        <StyledList>
          <StyledListItem>Service</StyledListItem>
          <StyledListItem>Über uns</StyledListItem>
          <StyledListItem>Online Beratung</StyledListItem>
          <StyledListItem>Betonrechner</StyledListItem>
        </StyledList>
      </StyledNavbar>{" "}
      <BurgerMenu src={burgerImg}></BurgerMenu>
    </NavSection>
  );
};

export default Navbar;
