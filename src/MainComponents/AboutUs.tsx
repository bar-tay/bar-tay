import React, { FC } from "react";
import styled from "styled-components";
import image1 from "../images/Bild_03.jpg";
import image2 from "../images/Bild_11.jpg";
import image3 from "../images/Bild_12.jpg";
import image4 from "../images/Bild_16.jpg";
import image5 from "../images/Bild_19.jpg";
import image6 from "../images/Bild_29.jpg";
import image7 from "../images/Bild_36.jpg";
import image8 from "../images/Bild_37.jpg";

const imageArr: string[] = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];
const AboutContainer = styled.article`
  text-align: center;
`;
const AboutTitle = styled.h2`
  font-family: Graphik-Semibold;
  font-size: 40px;
  color: #0b0a09;
  letter-spacing: -0.49px;
`;

const AboutText = styled.p`
  font-family: Graphik-Regular;
  font-size: 18px;
  color: #070707;
  letter-spacing: -0.22px;
  text-align: center;
  line-height: 43px;
  margin-bottom: 42px;
`;

const AboutImgContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
`;

const AboutImg = styled.img`
  width: 25%;
  object-fit: cover;
  @media only screen and (max-width: 790px) {
    width: 50%;
  }
  @media only screen and (max-width: 490px) {
    width: 100%;
  }
`;
const AboutGalleryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  position: relative;
  margin-left: -50vw;
  left: 50%;
  background-color: #d1d1d1;
  color: black;
  height: 96px;
  font-family: Graphik-Semibold;
  font-size: 24px;
  color: #ffffff;
  letter-spacing: -0.29px;
  border: none;
  outline: none;
`;
const AboutUs: FC = () => {
  return (
    <AboutContainer>
      <AboutTitle>Über uns</AboutTitle>
      <AboutText>
        Beton hat eine lange Geschichte. Schon vor 10.000 Jahren verwendeten die
        Menschen Kalkmörtel für ihre Bauten. Die Ägypter und die Römer
        verbesserten die „künstlichen Steine“. Aus dem lateinischen Begriff opus
        caementitium leitet sich der Begriff Zement ab. Der Baustoff bestand
        damals aus gebranntem Kalk, Wasser, Sand und Ziegelmehl. Wir knüpfen mit
        unserem Firmennamen an diese Tradition an. Die Geschichte des Betons ist
        noch lange nicht zu Ende. Nach dem Siegeszug des Stahlbetons
        experimentiert unsere Branche mit Beimischungen zum Färben, zum Veredeln
        und zum Stabilisieren des Materials. Beton kann inzwischen Lärm
        schlucken und Regenwasser durchsickern lassen. Es lassen sich andere
        Baustoffe imitieren.
      </AboutText>
      <AboutImgContainer>
        {imageArr.map((src) => (
          <AboutImg key={src} src={src} />
        ))}
      </AboutImgContainer>
      <AboutGalleryButton>Mehr Projekte</AboutGalleryButton>
    </AboutContainer>
  );
};

export default AboutUs;
