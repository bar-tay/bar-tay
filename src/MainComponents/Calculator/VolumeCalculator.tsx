import React from "react";
import styled from "styled-components";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormGroup from "@material-ui/core/FormGroup";

type VolumeCalculatorProps = {
  nextStep: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prevStep: () => void;
  handleClick: (event: any) => any;
  values: { form: string };
  calculate: () => void;
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
const ChoiceButton = styled(Button)`
  color: #151414;
  border: solid 2px;
  font-family: Graphik-Regular;
  background: none;
  font-size: 16px;
  width: 100%;
  cursor: pointer;
  pointer-events: inherit;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const StyledInput = styled(Input)`
  margin: 5px;
`;

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const InputFieldConatiner = styled.div`
  width: 90%;
  height: 200px;
  border: solid 2px;
  display: block;
  padding: 10px;
`;
const StyledButtonGroup = styled(ButtonGroup)``;

const VolumeCalculator = (props: VolumeCalculatorProps) => {
  function prevStepClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    props.prevStep();
  }

  function calculate(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    props.calculate();
    props.nextStep();
  }

  return (
    <>
      <StyledTitle>Projektart auswählen</StyledTitle>

      <StyledButtonGroup variant="text" color="default" fullWidth={true}>
        <ChoiceButton onClick={props.handleClick} name="form" value="quadrat">
          Quadrat
        </ChoiceButton>
        <ChoiceButton onClick={props.handleClick} name="form" value="zylinder">
          Zylinder
        </ChoiceButton>
        <ChoiceButton onClick={props.handleClick} name="form" value="dreieck">
          Dreieck
        </ChoiceButton>
      </StyledButtonGroup>
      <InputFieldConatiner>
        {props.values.form === "quadrat" && (
          <FormGroup onChange={props.handleChange}>
            <StyledInput
              name="länge"
              type="number"
              id="standard-adornment-weight"
              endAdornment={<InputAdornment position="end">m</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Länge
            </FormHelperText>
            <StyledInput
              name="breite"
              type="number"
              id="standard-adornment-weight"
              endAdornment={<InputAdornment position="end">m</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Breite
            </FormHelperText>
            <StyledInput
              type="number"
              id="standard-adornment-weight"
              name="tiefe"
              endAdornment={<InputAdornment position="end">m</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Tiefe
            </FormHelperText>
          </FormGroup>
        )}
        {props.values.form === "dreieck" && (
          <FormGroup onChange={props.handleChange}>
            <StyledInput
              name="länge"
              type="number"
              id="standard-adornment-weight"
              endAdornment={<InputAdornment position="end">m</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Länge
            </FormHelperText>
            <StyledInput
              name="breite"
              type="number"
              id="standard-adornment-weight"
              endAdornment={<InputAdornment position="end">m</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Breite
            </FormHelperText>
            <StyledInput
              type="number"
              id="standard-adornment-weight"
              name="tiefe"
              endAdornment={<InputAdornment position="end">m</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Tiefe
            </FormHelperText>
          </FormGroup>
        )}
        {props.values.form === "zylinder" && (
          <FormGroup onChange={props.handleChange}>
            <StyledInput
              name="radius"
              type="number"
              id="standard-adornment-weight"
              endAdornment={<InputAdornment position="end">r</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Radius
            </FormHelperText>
            <StyledInput
              type="number"
              id="standard-adornment-weight"
              name="winkel"
              endAdornment={<InputAdornment position="end">°</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Winkel
            </FormHelperText>
            <StyledInput
              type="number"
              id="standard-adornment-weight"
              name="tiefe"
              endAdornment={<InputAdornment position="end">m</InputAdornment>}
              aria-describedby="standard-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
            />
            <FormHelperText id="standard-weight-helper-text">
              Tiefe
            </FormHelperText>
          </FormGroup>
        )}
      </InputFieldConatiner>

      <StyledWrapper>
        <Button onClick={prevStepClick}>Zurück</Button>
        <Button onClick={calculate}>Berechnen</Button>
      </StyledWrapper>
    </>
  );
};

export default VolumeCalculator;
