import React, { useState, useEffect } from "react";
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
import Spinner from "./Components/spinner/Spinner";
import Certeficate from "./Components/certeficate/Certeficate";
import Skills from "./Components/skill/Skills";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate loading data
    const loadData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    loadData();
  }, []);

  if (error) {
    return <div className="error">Error: {error.message}</div>;
  }

  return (
    <div className="app">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <SideBar />
          <Navbar />
          <Homepage />
          <About />
          {/* <Skills /> */}
          <Services />
          <Resume />
          <Portfolio />
          <Certeficate />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
