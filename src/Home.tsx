import React from "react";
import Wrapper from "./Wrapper";
import Header from "./Header";
import Navbar from "./Navbar";
import Main from "./Main";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Header />
        <Main />
        <Footer />
      </Wrapper>
    </>
  );
}

export default Home;
