import "./App.css";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import LinkForm from "./components/LinkForm";
import Rank from "./components/Rank";
import ParticlesBg from "particles-bg";

function App() {
  return (
    <div className="App">
      <ParticlesBg color="#ebe8e8" type="cobweb" num={200} bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <LinkForm />
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
