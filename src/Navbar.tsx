import React, { FC } from "react";
import styled from "styled-components";
import logo from "./logos/logo_weiß.png";
import loginIcon from "./logos/login-32.png";
import { Link } from "react-router-dom";
const NavSection = styled.section`
  position: relative;
  display: flex;
  width: inherit;
  align-items: center;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.25);
  height: 106px;
  position: fixed;
  top: 0;
  z-index: 10;
  @media only screen and (max-width: 1100px) {
    justify-content: space-between;
    width: 100vw;
    position: relative;
    margin-left: -50vw;
    left: 50%;
    position: fixed;
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
  align-items: center;

  @media only screen and (max-width: 929px) {
    display: none;
  }
`;

const StyledListItem = styled.li`
  font-family: Graphik-Medium;
  font-size: 19px;
  color: #ffffff;
  letter-spacing: -0.23px;

  &:last-child {
    margin-right: 10px;
  }

  &:hover {
    border-bottom: solid 2px white;
    left: 0;
    transition: 2s;
    left: 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledListIcon = styled.img`
  color: #ffffff;
  height: 32px;
  width: 32px;

  &:hover {
    border-bottom: solid 2px white;
    left: 0;
    transition: 2s;
    left: 0;
  }
`;
const Logo = styled.img`
  width: 233px;
  height: 45px;
  margin-left: 10px;
`;

const BurgerMenu = styled.div`
  @media only screen and (min-width: 929px) {
    display: none;
  }
  position: absolute;
  right: 10;
  margin-right: 10px;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 50px;
    height: 3px;
    background-color: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    transform-origin: 1px;
  }
`;
const Menu = styled.section`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20rem;
  height: 100vh;
  background-color: #d1d1d1;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
`;
const MenuItems = styled.div`
  font-size: 1rem;
  text-transform: uppercase;
  padding: 2rem 1rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-decoration: none;
  transition: color 0.3s linear;

  &:hover {
    color: black;
  }
`;
const Navbar: FC = () => {
  const [active, setActive] = React.useState(false);
  return (
    <NavSection>
      <StyledLink to="/">
        <Logo src={logo} />
      </StyledLink>
      <StyledNavbar>
        <StyledList>
          <StyledListItem>Service</StyledListItem>
          <StyledListItem>Betonrechner</StyledListItem>
          <StyledListItem>Über uns</StyledListItem>
          <StyledListItem>Online Beratung</StyledListItem>
          <StyledLink to="/login">
            <StyledListIcon src={loginIcon} />
          </StyledLink>
        </StyledList>
      </StyledNavbar>{" "}
      <BurgerMenu onClick={() => setActive(!active)}>
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenu>
      {active && (
        <Menu>
          <MenuItems>Service</MenuItems>
          <MenuItems>Betonrechner</MenuItems>
          <MenuItems>Über uns</MenuItems>
          <MenuItems>Online Beratung</MenuItems>
        </Menu>
      )}
    </NavSection>
  );
};

export default Navbar;
