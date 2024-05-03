import "./App.scss";
import About from "./Components/about/About";
import Homepage from "./Components/homePage/Homepage";
import Navbar from "./Components/navbar/Navbar";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/service/Service";
import SideBar from "./Components/sideBar/SideBar";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Navbar />
      <Homepage />
      <About />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;

// import React from "react";

// export default function App() {
//   return (
//     <h1 className="text-3xl underline text-blue-500 font-bold">Hello world!</h1>
//   );
// }
