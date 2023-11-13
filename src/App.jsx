import "./App.css";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import LinkForm from "./components/LinkForm";
import Rank from "./components/Rank";
import FaceRecognition from "./components/FaceRecognition";
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

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = () => {
    setImageURL(input);
    fetch(
      // eslint-disable-next-line no-useless-concat
      "https://api.clarifai.com/v2/models/" + "face-detection" + "/outputs",
      returnClarifaiRequestOptions(input)
    )
      .then((response) => response.json())
      .then((result) =>
        console.log(result.outputs[0].data.regions[0].region_info.bounding_box)
      )
      .catch((error) => console.log("error", error));
  };

  return (
    <div className="App">
      <ParticlesBg color="#ebe8e8" type="cobweb" num={200} bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <LinkForm onInputChange={onInputChange} onSubmit={onSubmit} />
      <FaceRecognition imageURL={imageURL} />
    </div>
  );
};

export default App;
