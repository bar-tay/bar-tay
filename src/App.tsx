import React from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Navbar from "./Navbar";
import Main from "./Main";

function App() {
  return (
    <Wrapper>
      <Navbar></Navbar>
      <Header></Header>
      <Main></Main>
    </Wrapper>
  );
}

export default App;
