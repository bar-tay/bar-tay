import * as React from "react";
import styled from "styled-components";
import check from "../../logos/check.png";
type ISuccessProps = {
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
  margin-top: 15px;
`;
const Check = styled.img`
  width: 20%;
`;
export default function Success(props: ISuccessProps) {
  function prevStepClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    props.prevStep();
  }
  return (
    <>
      {" "}
      <StyledTitle>Vielen Dank für ihre Teilnahme</StyledTitle>
      <Check src={check}></Check>
      <StyledText>Sie erhalten in kürze eine Email</StyledText>
      <Button onClick={prevStepClick}> Daten ändern</Button>
    </>
  );
}
