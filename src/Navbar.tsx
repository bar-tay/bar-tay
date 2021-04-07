import React, { FC } from "react";
import styled from "styled-components";
import logo from "./logos/Logo_grau.png";

const NavSection = styled.section`
  display: flex;
  width: inherit;
  align-items: center;
  justify-content: space-between;
  background: rgba(216, 216, 216, 0.12);
  height: 106px;
  position: fixed;
  top: 0;
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  padding-inline-start: 0px;
`;
const StyledListItem = styled.li`
  margin-right: 60px;
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
          <StyledListItem>Über uns</StyledListItem>
          <StyledListItem>Spezialanfertigungen</StyledListItem>
          <StyledListItem>Beratung</StyledListItem>
          <StyledListItem>Beratung</StyledListItem>
        </StyledList>
      </StyledNavbar>
    </NavSection>
  );
};

export default Navbar;
