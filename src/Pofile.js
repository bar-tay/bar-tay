import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const Container = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Profile = () => {
  const location = useLocation();

  const userData = location.state.user;

  console.log(userData);

  return (
    <>
      <Navbar></Navbar>
      <Container>
        <h1>Mein Profil</h1>
        <h3>Name</h3>
        <p>{userData.fullName}</p>
        <h3>E-mail Adresse</h3>
        <p>{userData.email}</p>
        <h3>Alter</h3>
        <p>{userData.age}</p>
        <h3>Alter</h3>
        <p>{userData.username}</p>
      </Container>
    </>
  );
};

export default Profile;
