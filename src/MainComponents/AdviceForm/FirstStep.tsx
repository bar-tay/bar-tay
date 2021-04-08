import React from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import styled from "styled-components";

type FirstProps = {
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
  margin-top: 20px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FirstStep = (props: FirstProps) => {
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
      <StyledTitle>Ich komme aus dem Bereich:</StyledTitle>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="bereich"
          onChange={props.handleChange}
        >
          <FormControlLabel
            value="Baustoffhandel"
            control={<Radio color="default" />}
            label="Baustoffhandel"
          />
          <FormControlLabel
            value="Architektur/Statik"
            control={<Radio color="default" />}
            label="Architektur/Statik"
          />
          <FormControlLabel
            value="Bauingenieurwesen"
            control={<Radio color="default" />}
            label="Bauingenieurwesen"
          />
          <FormControlLabel
            value="Bauprojektleitung"
            control={<Radio color="default" />}
            label="Bauprojektleitung"
          />
          <FormControlLabel
            value="Denkmalpflege"
            control={<Radio color="default" />}
            label="Denkmalpflege"
          />
        </RadioGroup>
        <TextField
          id="standard-textarea"
          label="Andere"
          placeholder="Placeholder"
          multiline
          name="andere"
          onChange={props.handleChange}
        />
      </FormControl>
      <StyledWrapper>
        <Button onClick={prevStepClick}>Zurück</Button>
        <Button onClick={change}>Weiter</Button>
      </StyledWrapper>
    </>
  );
};
export default FirstStep;
