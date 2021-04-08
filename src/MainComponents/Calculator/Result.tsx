import * as React from "react";
import styled from "styled-components";

type IResultProps = {
  prevStep: () => void;
  values: { project: string };
  result: number;
};

const StyledTitle = styled.h1`
  font-family: Graphik-Bold;
  font-size: 22px;
  color: #070707;
  letter-spacing: -0.27px;
  line-height: 29px;
  text-align: center;
  margin-top: 0;
`;
const StyledSubTitle = styled.h2`
  font-family: Graphik-Semibold;
  font-size: 20px;
  color: #070707;
  letter-spacing: -0.27px;
  line-height: 29px;
  text-align: center;
  margin-top: 0;
`;
const Button = styled.button`
  background: #151414;
  font-family: Graphik-Semibold;
  font-size: 18px;
  color: #ffffff;
  letter-spacing: -0.24px;
  text-align: center;
  padding: 10px;
  width: 100%;
  margin-top: 20px;
`;

export default function Result(props: IResultProps) {
  function prevStepClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    props.prevStep();
  }

  return (
    <>
      <StyledTitle>Ergebniss der Menge für ihr Projekt </StyledTitle>
      <StyledSubTitle>Projekt: {props.values.project} </StyledSubTitle>
      <p>Sie benötigen {Math.round(props.result * 100) / 100}m3 Beton.</p>
      <Button onClick={prevStepClick}> Daten ändern</Button>
    </>
  );
}
