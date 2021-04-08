import * as React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import styled from "styled-components";

type FourthProps = {
  nextStep: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  prevStep: () => void;
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: {
    weiteres: boolean;
    perMail: boolean;
    perTelefon: boolean;
  };
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
const ElementWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
export default function FourthStep(props: FourthProps) {
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
      <StyledTitle>Ich möchte kontaktiert werden:</StyledTitle>
      <FormGroup onChange={props.handleClick}>
        <ElementWrapper>
          <FormControlLabel
            control={<Checkbox name="perMail" />}
            label="Per Mail"
          />
          {props.values.perMail && (
            <TextField
              id="standard-textarea"
              label="Email Adresse"
              placeholder="@mail.com"
              multiline
              name="email"
              onChange={props.handleChange}
            />
          )}
        </ElementWrapper>
        <FormControlLabel
          control={<Checkbox name="perTelefon" />}
          label="Per Telefon"
        />{" "}
        {props.values.perMail && (
          <TextField
            id="standard-textarea"
            label="Telefonnummer"
            placeholder="017662260658"
            multiline
            name="phoneNumber"
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
