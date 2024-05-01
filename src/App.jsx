import "./App.scss";
import Homepage from "./Components/homePage/Homepage";
import Navbar from "./Components/navbar/Navbar";
import Portfolio from "./Components/portfolio/Portfolio";
import SideBar from "./Components/sideBar/SideBar";
import MySkill from "./Components/skill/MySkill";
import About from "./Pages/about/About";

function App() {
  return (
    <div className="app">
      <SideBar />
      <Navbar />
      <Homepage />
      <About />
      <MySkill />
      <Portfolio />
    </div>
  );
}

export default App;
