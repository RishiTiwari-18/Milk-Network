import React from "react";
import ScrollAnimation from "./components/ScrollAnimation.jsx";
import InfoCard from "./components/InfoCard.jsx";
import Portfolio from "./components/Portfolio.jsx";
import useLenis from "./components/useLenis.js";
import WhatWeDo from "./components/WhatWeDo.jsx";
import Dreams from "./components/Dreams.jsx";
import Footer from "./components/Footer.jsx";
import Nav from "./components/Nav.jsx";
import Nav2 from "./components/Nav2.jsx"
function App() {
  useLenis();
  return (
    <div className=" h-screen w-full bg-white">
      <Nav/>
      <Nav2/>
      <ScrollAnimation />
      <InfoCard/>
      <WhatWeDo/>
      <Portfolio/>
      <Dreams/>
      <Footer/>
    </div>
  );
}

export default App;
