import React from "react";
import styled from "styled-components";
import podestImg from "../images/podest.jpg";
import brüstungImg from "../images/brüstung.png";
import treppeImg from "../images/treppe.jpg";
import historyImg from "../images/history.jpg";
import balkonImg from "../images/balkon.png";

type serviceObjProps = {
  img: string;
  title: string;
  description: string;
}[];

const serviceData: serviceObjProps = [
  {
    img: podestImg,
    title: "Podeste",
    description: "Beton ist vielseitig. Beton sorgt für Überblick.",
  },
  {
    img: balkonImg,
    title: "Balkone",
    description: "Beton ist nicht grau. Beton schafft Lebensraum.",
  },
  {
    img: brüstungImg,
    title: "Brüstungen",
    description: "Beton ist luftig. Beton gibt Halt.",
  },
  {
    img: treppeImg,
    title: "Treppen",
    description: "Beton ist variabel. Beton bringt Bewegung ins Haus.",
  },
  {
    img: historyImg,
    title: "Historischer Bauteile",
    description: "Beton ist wandelbar. Beton ersetzt andere Materialien.",
  },
];

const ServieContainer = styled.section`
  background-color: white;
  text-align: center;
  padding-top: 37px;
`;

const ServiceTitle = styled.h2`
  font-family: Graphik-Medium;
  font-size: 40px;
  color: #141414;
  letter-spacing: -0.49px;
`;

const ServiceSubTitle = styled.p`
  font-family: Graphik-Medium;
  font-size: 20px;
  color: #141414;
  letter-spacing: -0.24px;
  margin: 18px 0 42px;
`;

const ServiceElementContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap-reverse;
  justify-content: space-around;
`;

const StyledServiceElement = styled.div`
  height: 391px;
  width: 289px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 6px;

  margin-bottom: 60px;
`;

const ServiceElementImg = styled.img`
  width: 100%;
  height: 259px;
`;

const ServiceElementTitle = styled.h3`
  font-family: Graphik-Medium;
  font-size: 22px;
  color: #040303;
  letter-spacing: -0.27px;
  margin: 18px 0 8px;
`;

const ServiceElementDescription = styled.p`
  font-family: Graphik-Regular;
  font-size: 16px;
  color: #040303;
  letter-spacing: -0.2px;
  margin: 0 0 8px;
`;

const ServiceElementLink = styled.a`
  font-family: Graphik-Medium;
  font-size: 16px;
  color: #040303;
  letter-spacing: -0.2px;
  &:hover {
    transition: transform 4s ease-out;
    text-decoration: underline;
  }
`;

export default function Service() {
  return (
    <ServieContainer id="#Service">
      <ServiceTitle>Unser Service</ServiceTitle>
      <ServiceSubTitle>
        Wir stellen für Sie aus Stahlbeton individuelle Fertigteile her:
      </ServiceSubTitle>
      <ServiceElementContainer>
        {serviceData.reverse().map((el) => (
          <StyledServiceElement key={el.title}>
            <ServiceElementImg src={el.img}></ServiceElementImg>
            <ServiceElementTitle>{el.title}</ServiceElementTitle>
            <ServiceElementDescription>
              {el.description}
            </ServiceElementDescription>
            <ServiceElementLink>Mehr</ServiceElementLink>
          </StyledServiceElement>
        ))}
      </ServiceElementContainer>
    </ServieContainer>
  );
}
