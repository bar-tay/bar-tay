import * as React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

type SecondProps = {
  nextStep: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: {
    weiteres: boolean;
  };
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
export default function SecondStep(props: SecondProps) {
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
      <StyledTitle>Mein Bauprojekt betrifft:</StyledTitle>
      <FormGroup onChange={props.handleClick}>
        <FormControlLabel
          control={<Checkbox color="default" name="Neubau privat" />}
          label="Neubau privat "
        />
        <FormControlLabel
          control={<Checkbox color="default" name="Neubau kommunal" />}
          label="Neubau kommunal"
        />
        <FormControlLabel
          control={<Checkbox color="default" name="Bausanierung" />}
          label="Bauingenieurwesen"
        />
        <FormControlLabel
          control={
            <Checkbox color="default" name="Garten- und Landschaftsbau" />
          }
          label="Garten- und Landschaftsbau"
        />
        <FormControlLabel
          control={<Checkbox color="default" name="Tiefbau" />}
          label="Tiefbau"
        />
        <FormControlLabel
          control={<Checkbox color="default" name="Stadtmöbel" />}
          label="Stadtmöbel"
        />
        <FormControlLabel
          control={<Checkbox color="default" name="Betonmöbel" />}
          label="Betonmöbel"
        />
        <FormControlLabel
          control={<Checkbox color="default" name="Baumaterialien" />}
          label="Baumaterialien"
        />
        <FormControlLabel
          control={<Checkbox color="default" name="weiteres" />}
          label="Weiteres"
        />
        {props.values.weiteres && (
          <TextField
            id="standard-textarea"
            label="Weiteres"
            placeholder="Placeholder"
            multiline
            name="weiteres"
            onChange={props.handleChange}
          />
        )}
      </FormGroup>
      <StyledWrapper>
        <Button onClick={prevStepClick}>Zurück</Button>
        <Button onClick={change}>Weiter</Button>
      </StyledWrapper>
    </>
  );
}
