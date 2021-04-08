import React, { useState, FC } from "react";
import styled from "styled-components";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import adviceImg from "../../images/Bild_19.jpg";
import DeafaultStep from "./DefaultStep";
import Success from "./Success";

const AdviceWrapper = styled.article``;

const AdviceTitle = styled.h2`
  font-size: 40px;
  text-align: center;
  margin: 0 0 40px;
`;

const AdviceImg = styled.img`
  width: 50%;
  object-fit: cover;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

const AdviceSection = styled.section`
  display: flex;
  justify-content: space-between;
`;

const AdviceFormSteps = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

const AdviceForm: FC = () => {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({
    weiteres: false,
    perMail: false,
    perTelefon: false,
  });

  function nextStep() {
    const next = step + 1;
    setStep(next);
  }

  function prevStep() {
    setStep(step - 1);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { name, value } = target;
    event.persist();
    setValues({ ...values, [name]: value });
    console.log(values);
  };

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues({ ...values, [event.target.name]: event.target.checked });
    console.log(values);
  };

  function switchSteps() {
    switch (step) {
      case 0:
        return <DeafaultStep nextStep={nextStep} />;
      case 1:
        return (
          <FirstStep
            nextStep={nextStep}
            prevStep={prevStep}
            handleChange={handleChange}
          />
        );
      case 2:
        return (
          <SecondStep
            nextStep={nextStep}
            handleChange={handleChange}
            handleClick={handleClick}
            prevStep={prevStep}
            values={values}
          />
        );
      case 3:
        return (
          <ThirdStep
            nextStep={nextStep}
            handleChange={handleChange}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <FourthStep
            nextStep={nextStep}
            handleChange={handleChange}
            prevStep={prevStep}
            handleClick={handleClick}
            values={values}
          />
        );
      case 5:
        return <Success prevStep={prevStep} />;
    }
  }
  return (
    <AdviceWrapper>
      <AdviceTitle>Online Beratung</AdviceTitle>
      <AdviceSection>
        {" "}
        <AdviceFormSteps>{switchSteps()}</AdviceFormSteps>
        <AdviceImg src={adviceImg}></AdviceImg>
      </AdviceSection>
    </AdviceWrapper>
  );
};

export default AdviceForm;
