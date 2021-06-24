import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
`;
const StyledInput = styled.input`
  margin: 15px 0;
  padding: 12px 20px;
  margin: 8px 0;
`;

const StyledButton = styled.div`
  background-color: #555555; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;
const Login = () => {
  const history = useHistory();
  const [active, setActive] = useState(false);
  const [loginValues, setLoginValues] = useState({});

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;

    event.preventDefault();
    setLoginValues({ ...loginValues, [name]: value });

    console.log(loginValues);
  };

  const onSubmitRegistered = async (event) => {
    try {
      event.preventDefault();
      if (loginValues.password.length < 6) {
        console.log("hey");
        return alert("Passwort muss mindestens 6 Zeichen haben");
      }
      const registered = {
        fullName: loginValues.fullName,
        username: loginValues.username,
        age: loginValues.age,
        email: loginValues.email,
        password: loginValues.password,
      };

      console.log(registered);
      const result = await axios.post(
        "http://localhost:4000/app/signup",
        registered
      );

      const he = await result.data;
      setActive(!active);
      console.log(he);

      return result;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  const onSubmitLogin = async (event) => {
    try {
      event.preventDefault();

      const login = {
        username: loginValues.username,
        password: loginValues.password,
      };

      console.log(loginValues);

      const result = await axios.post("http://localhost:4000/app/login", login);

      const data = await result.data;

      console.log(data);
      history.push({ pathname: "/myprofile", state: { user: data.data } });
      return result;
    } catch (err) {
      console.error(err);
      return false;
    }
  };
  return (
    <>
      <Container>
        <Navbar />
        {active && (
          <>
            <StyledForm>
              <h1>Login</h1>
              <StyledInput
                placeholder="Nutzername"
                name="username"
                onChange={handleChange}
              ></StyledInput>
              <StyledInput
                placeholder="Passwort"
                name="password"
                onChange={handleChange}
              ></StyledInput>
              <StyledButton onClick={onSubmitLogin}>Einloggen</StyledButton>
            </StyledForm>
            <StyledButton onClick={() => setActive(!active)}>
              Noch nicht registriert?
            </StyledButton>
          </>
        )}
        {!active && (
          <>
            <StyledForm>
              <h1>Sign-up</h1>
              <StyledInput
                placeholder="Name"
                name="fullName"
                onChange={handleChange}
              ></StyledInput>

              <StyledInput
                placeholder="Nutzername"
                name="username"
                onChange={handleChange}
              ></StyledInput>
              <StyledInput
                type="number"
                placeholder="Alter"
                name="age"
                onChange={handleChange}
              ></StyledInput>
              <StyledInput
                placeholder="Email Adresse"
                name="email"
                onChange={handleChange}
              ></StyledInput>
              <StyledInput
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                autoComplete="current-password"
              ></StyledInput>
              <StyledButton onClick={onSubmitRegistered}>
                Registrieren
              </StyledButton>
            </StyledForm>
            <StyledButton onClick={() => setActive(!active)}>
              Bereits registriert?
            </StyledButton>
          </>
        )}
      </Container>
    </>
  );
};

export default Login;
