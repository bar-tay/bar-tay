import React, { FC } from "react";
import styled from "styled-components";
import AboutUs from "./MainComponents/AboutUs";
import AdviceForm from "./MainComponents/AdviceForm/AdviceForm";
import Calculator from "./MainComponents/Calculator/Calculator";
import Service from "./MainComponents/Service";

const StyledContainer = styled.article`
  background-color: white;
`;

const Divider = styled.div`
  border: 0.5px solid #979797;
  width: 100%;
  margin: 95px 0 95px;
`;

const Main: FC = () => {
  return (
    <StyledContainer>
      <Service />
      <Divider />
      <Calculator></Calculator>
      <Divider></Divider>
      <AboutUs />
      <Divider></Divider>
      <AdviceForm />
    </StyledContainer>
  );
};

export default Main;
