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
      <Navbar></Navbar>
      <Container>
        {active && (
          <>
            <StyledForm>
              <h1>Login</h1>
              <input
                placeholder="username"
                name="username"
                onChange={handleChange}
              ></input>
              <input
                placeholder="password"
                name="password"
                onChange={handleChange}
              ></input>
              <button onClick={onSubmitLogin}> Einloggen</button>
            </StyledForm>
            <button onClick={() => setActive(!active)}>
              Noch nicht registriert?
            </button>
          </>
        )}
        {!active && (
          <>
            <StyledForm>
              <h1>Sign-up</h1>
              <input
                placeholder="Name"
                name="fullName"
                onChange={handleChange}
              ></input>

              <input
                placeholder="Nutzername"
                name="username"
                onChange={handleChange}
              ></input>
              <input
                placeholder="Alter"
                name="age"
                onChange={handleChange}
              ></input>
              <input
                placeholder="Email Adresse"
                name="email"
                onChange={handleChange}
              ></input>
              <input
                placeholder="Passwort"
                name="password"
                onChange={handleChange}
              ></input>
              <button onClick={onSubmitRegistered}> Registrieren</button>
            </StyledForm>
            <button onClick={() => setActive(!active)}>
              Bereits registriert?
            </button>
          </>
        )}
      </Container>
    </>
  );
};

export default Login;
