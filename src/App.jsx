import './App.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import LinkForm from './components/LinkForm';
import Rank from './components/Rank';




function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <LinkForm/>
      <Rank/>
      {/* <FaceRecognition/> */}
    </div>
  );
}

export default App;
