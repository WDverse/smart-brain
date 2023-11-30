import "./App.css";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import LinkForm from "./components/LinkForm";
import Rank from "./components/Rank";
import FaceRecognition from "./components/EmotionRecognition";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import ParticlesBg from "particles-bg";

const returnClarifaiRequestOptions = (imageURL) => {
  const PAT = "6183634a6fd4459e895e2b8fcc92b1e1";
  const USER_ID = "wdappiagyei";
  const APP_ID = "smartbrain";
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
  const [sentiment, setSentiment] = useState("");
  const [message, setMessage] = useState("");
  const [route, setRoute] = useState("signIn");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const detectEmotion = (data) => {
    const emotion = data.outputs[0].data.concepts[0].name;
    return emotion;
  };

  const faceEmotion = (emotion) => {
    setSentiment(emotion);
  };

  useEffect(() => {
    if (sentiment) {
      setMessage(`Smart Brain detects ${sentiment}`);
    }
  }, [sentiment]);

  const onSubmit = async () => {
    if (!imageURL.trim()) {
      setMessage("Please enter image URL");
    } else {
      setMessage(`Smart Brain detects ${sentiment}`);
    }

    setImageURL(input);
    try {
      const response = await fetch(
        "https://api.clarifai.com/v2/models/face-sentiment-recognition/outputs",
        returnClarifaiRequestOptions(input)
        );
        const data = await response.json();
        return faceEmotion(detectEmotion(data));
      } catch (err) {
        console.log(err);
      }
    };
    
    const onInputChange = (event) => {
      setInput(event.target.value);
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
          <FaceRecognition imageURL={imageURL} message={message} />
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
