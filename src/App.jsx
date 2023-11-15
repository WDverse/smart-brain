import "./App.css";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import LinkForm from "./components/LinkForm";
import Rank from "./components/Rank";
import FaceRecognition from "./components/FaceRecognition";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import ParticlesBg from "particles-bg";

const returnClarifaiRequestOptions = (imageURL) => {
  const PAT = "6183634a6fd4459e895e2b8fcc92b1e1";
  const USER_ID = "wdappiagyei";
  const APP_ID = "smartbrain";
  const MODEL_ID = "face-detection";
  const IMAGE_URL = imageURL;

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: IMAGE_URL,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };
  return requestOptions;
};

const App = () => {
  const [input, setInput] = useState(" ");
  const [imageURL, setImageURL] = useState("");
  const [box, setBox] = useState({});
  const [route, setRoute] = useState("signIn");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const detectFaceLocation = (data) => {
    const face = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: face.left_col * width,
      topRow: face.top_row * height,
      rightCol: width - face.right_col * width,
      bottomRow: height - face.bottom_row * height,
    };
  };

  const faceBox = (box) => {
    setBox(box);
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = async () => {
    setImageURL(input);
    try {
      const response = await fetch(
        "https://api.clarifai.com/v2/models/face-detection/outputs",
        returnClarifaiRequestOptions(input)
      );
      const data = await response.json();
      return faceBox(detectFaceLocation(data));
    } catch (err) {
      console.log(err);
    }
  };

  const onRouteChange = (route) => {
    setIsSignedIn(route === "home" ? true : false);
    setRoute(route);
  };

  return (
    <div className="App">
      <ParticlesBg color="#ebe8e8" type="cobweb" num={200} bg={true} />
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === "home" ? (
        <div>
          <Logo />
          <Rank />
          <LinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
          <FaceRecognition box={box} imageURL={imageURL} />
        </div>
      ) : route === "signIn" ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
