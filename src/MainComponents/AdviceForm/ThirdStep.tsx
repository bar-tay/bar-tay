import * as React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

type ThirdProps = {
  nextStep: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;

  prevStep: () => void;
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
const Button = styled.button`
  background: #151414;
  font-family: Graphik-Semibold;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: -0.24px;
  text-align: center;
  padding: 10px;
  width: 40%;
`;
const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export default function ThirdStep(props: ThirdProps) {
  function change(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    props.nextStep();
  }
  function prevStepClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    props.prevStep();
  }
  return (
    <>
      <StyledTitle>
        Folgendes möchte ich zu meinem Projekt noch loswerden:
      </StyledTitle>
      <TextField
        id="outlined-multiline-static"
        label="Text"
        multiline
        rows={6}
        defaultValue="Hier schreiben"
        variant="outlined"
        fullWidth={true}
      />
      <StyledWrapper>
        <Button onClick={prevStepClick}>Zurück</Button>
        <Button onClick={change}>Weiter</Button>
      </StyledWrapper>
    </>
  );
}
