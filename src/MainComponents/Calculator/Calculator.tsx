import * as React from "react";
import styled from "styled-components";
import calcImg from "../../images/Bild_55.jpg";
import DeafaultStep from "./DefaultStep";
import ChooseProject from "./ChooseProject";
import VolumeCalculator from "./VolumeCalculator";
import Result from "./Result";
const CalcWrapper = styled.article``;

const CalcTitle = styled.h2`
  font-size: 40px;
  text-align: center;
  margin: 0 0 40px;
`;

const CalcImg = styled.img`
  width: 50%;
  object-fit: cover;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const CalcSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const CalcFormSteps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export default function Calculator() {
  const [step, setStep] = React.useState(0);
  const [values, setValues] = React.useState({
    project: "",
    form: "quadrat",
    länge: 0,
    breite: 0,
    tiefe: 0,
    winkel: 0,
    radius: 0,
  });
  const [result, setResult] = React.useState(0);

  function nextStep() {
    const next = step + 1;
    setStep(next);
  }

  function prevStep() {
    setStep(step - 1);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleClick = (event: any): any => {
    const name: any = event.currentTarget.getAttribute("name");
    console.log(name);
    const value = event.currentTarget.getAttribute("value");
    event.persist();
    setValues({ ...values, [name]: value });
    console.log(typeof name, value);
    console.log(values);
  };
  function calculate() {
    switch (values.form) {
      case "quadrat":
        const resultSquare = values.länge * values.breite * values.tiefe;
        setResult(resultSquare);
        console.log(resultSquare);
        break;
      case "dreieck":
        const volumePrisma = (values.länge * values.breite * values.tiefe) / 2;
        setResult(volumePrisma);
        console.log(volumePrisma);
        break;
      case "zylinder":
        const pie = Math.PI;

        const volumeZylinder =
          (pie * Math.pow(values.radius, 2) * values.tiefe * values.winkel) /
          360;
        setResult(volumeZylinder);
        break;
    }
  }

  function switchSteps() {
    switch (step) {
      case 0:
        return <DeafaultStep nextStep={nextStep} />;
      case 1:
        return (
          <ChooseProject
            prevStep={prevStep}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        );
      case 2:
        return (
          <VolumeCalculator
            prevStep={prevStep}
            handleChange={handleChange}
            handleClick={handleClick}
            nextStep={nextStep}
            values={values}
            calculate={calculate}
          />
        );
      case 3:
        return <Result result={result} prevStep={prevStep} values={values} />;
    }
  }

  return (
    <CalcWrapper>
      <CalcTitle>Betonrechner</CalcTitle>
      <CalcSection>
        <CalcImg src={calcImg}></CalcImg>
        <CalcFormSteps>{switchSteps()}</CalcFormSteps>
      </CalcSection>
    </CalcWrapper>
  );
}
