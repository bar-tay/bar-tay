import * as React from "react";
import styled from "styled-components";

type IDefaultStepProps = {
  nextStep: () => void;
};
const StyledTitle = styled.h1`
  font-family: Graphik-Bold;
  font-size: 28px;
  color: #070707;
  letter-spacing: -0.27px;
  line-height: 29px;
  text-align: center;
  margin-top: 0;
`;

const StyledText = styled.p`
  font-family: Graphik-Medium;
  font-size: 20px;
  color: #292a2b;
  letter-spacing: -0.24px;
  text-align: center;
  line-height: 40px;
`;

const Button = styled.button`
  background: #151414;
  font-family: Montserrat-Bold;
  font-size: 20px;
  color: #ffffff;
  letter-spacing: -0.24px;
  text-align: center;
  padding: 10px;
  width: 100%;
`;
export default function DefaultStep(props: IDefaultStepProps) {
  function change(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault();
    props.nextStep();
  }
  return (
    <>
      <StyledTitle>Betonmenge ausrechnen lassen</StyledTitle>

      <StyledText>
        Nutzen Sie den Betonrechner um die Menge des benötigten Betons für Ihr
        Projekt auszurechnen. Wenn Sie sich nicht sicher sind, wie Sie das
        Volumen verschiedener Formen berechnen, nutzen Sie einfach den
        Beton-Form-Rechner.
      </StyledText>
      <Button onClick={change}>Jetzt beraten</Button>
    </>
  );
}
