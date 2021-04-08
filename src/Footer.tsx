import React from "react";
import styled from "styled-components";
import footerLogo from "./logos/Logo_schwarz.png";

const StyledFooter = styled.footer`
  margin-top: 90px;
  border-top: solid 1px;
  display: flex;
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
  justify-content: space-evenly;
  align-items: center;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }
`;
const StyledFooterTitle = styled.h3`
  font-family: Graphik-Regular;
  margin: 0;
  font-size: 18px;
  color: #0b090a;
  letter-spacing: -0.24px;
  line-height: 34px;
  width: 50vw;
  padding: 10px;
  @media only screen and (max-width: 700px) {
    font-size: 16px;
    text-align: center;
  }
`;

const StyledFooterLogo = styled.img`
  width: 125px;
  height: 25%;
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
`;
const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 10px;
  @media only screen and (max-width: 700px) {
    align-items: center;
  }
`;
const StyledSpan = styled.span`
  font-size: 16px;
  margin-bottom: 6px;
`;
export default function Footer() {
  const address: string[] = [
    "Cementus GmbH",
    "Geschäftsführung:",
    "Walter Brills",
    "Fünfhausener Landweg 130",
    "21079 Hamburg",
  ];

  const contact: string[] = [
    "+49 (0)40/767042-0",
    "www.cementus.de",
    "info@cementus.de",
  ];
  const creator: any[] = [
    "Verantwortlich für diese Seiten:",
    "Barkley Taylor/Meg91",
    <a href="">Impressum</a>,
  ];
  return (
    <StyledFooter>
      <StyledFooterLogo src={footerLogo} />{" "}
      <StyledSection>
        {" "}
        <StyledFooterTitle>KONTAKT</StyledFooterTitle>
        <ContentContainer>
          <Wrapper>
            {address.map((el) => (
              <StyledSpan>{el}</StyledSpan>
            ))}
          </Wrapper>
          <Wrapper>
            {contact.map((el) => (
              <StyledSpan>{el}</StyledSpan>
            ))}
          </Wrapper>
          <Wrapper>
            {creator.map((el) => (
              <StyledSpan>{el}</StyledSpan>
            ))}
          </Wrapper>
        </ContentContainer>
      </StyledSection>
    </StyledFooter>
  );
}
