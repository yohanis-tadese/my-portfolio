import React from "react";
import "./App.scss";
import About from "./Components/about/About";
import Homepage from "./Components/homePage/Homepage";
import Navbar from "./Components/header/Navbar";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/service/Service";
import SideBar from "./Components/sideBar/SideBar";
import Resume from "./Components/resume/Resume";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
// import Certeficate from "./Components/certeficate/Certeficate";
// import Spinner from "./Components/spinner/Spinner";
// import Skills from "./Components/skill/Skills";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Navbar />
      <Homepage />
      <About />
      {/* <Skills /> */}
      <Services />
      <Resume />
      <Portfolio />
      {/* <Certeficate /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
