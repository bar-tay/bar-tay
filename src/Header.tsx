import React, { FC } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
`;

const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: white;
`;

const HeaderTitle = styled.h1`
  font-size: 100px;
  margin: 0;
  @media only screen and (max-width: 921px) {
    font-size: 70px;
  }
  @media only screen and (max-width: 481px) {
    color: black;
  }
`;

const HeaderSubtitle = styled.p`
  font-size: 60px;
  margin: 0;
  text-align: center;
  font-weight: 500;
  @media only screen and (max-width: 921px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 481px) {
    color: black;
  }
`;
const HeaderButton = styled.button`
  background: #ffffff;
  color: black;
  width: 200px;
  height: 60px;
  border: none;
  outline: none;
  font-family: Graphik-Semibold;
  font-size: 20px;
  color: #0b0b0b;
  letter-spacing: -0.24px;
  margin-top: 28px;
  @media only screen and (max-width: 481px) {
    color: white;
    background: black;
  }
`;

const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderSection>
        <HeaderTitle>BETON</HeaderTitle>
        <HeaderSubtitle>
          Es kommt darauf an,<br></br> was man daraus<br></br> macht!
        </HeaderSubtitle>
        <HeaderButton>Mehr</HeaderButton>
      </HeaderSection>
    </HeaderContainer>
  );
};

export default Header;
