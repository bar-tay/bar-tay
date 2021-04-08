import React, { FC } from "react";
import styled from "styled-components";
import img from "./images/Bild_37.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${img});
  background-size: contain;
  background-repeat: no-repeat;
`;
const ContentWrapper = styled.div`
  width: 72%;
`;
const Wrapper: FC = ({ children }) => (
  <Container>
    <ContentWrapper>{children}</ContentWrapper>
  </Container>
);

export default Wrapper;
