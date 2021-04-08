import React from "react";
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

const projects = [
  "Balkon",
  "Treppe",
  "Brüstung",
  "Podest",
  "Historische Bauteile",
];

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

const ChooseProject = (props: FirstProps) => {
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
      <StyledTitle>Projektart auswählen</StyledTitle>
      <FormControl component="fieldset">
        <RadioGroup name="project" onChange={props.handleChange}>
          {projects.map((project: string) => (
            <FormControlLabel
              value={project}
              control={<Radio color="default" />}
              label={project}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <StyledWrapper>
        <Button onClick={prevStepClick}>Zurück</Button>
        <Button onClick={change}>Weiter</Button>
      </StyledWrapper>
    </>
  );
};
export default ChooseProject;
