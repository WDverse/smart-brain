import React from "react";
import "../../styles/emotionRecognition.css";

const EmotionRecognition = ({ imageURL, message }) => {
  return !imageURL ? (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          className="shadow-5 br3"
          src={`https://wallpapers.com/images/hd/brain-si5nkukyramo27ni.jpg`}
          width="500"
          height="auto"
          alt=""
        />
      </div>
    </div>
  ) : (
    <div className="center ma">
      <div className="absolute mt2">
        <p className="emotion shadow-5 br3 pa3"> {message} </p>
        <img
          id="inputImage"
          className="shadow-5 br3"
          src={imageURL}
          width="500"
          height="auto"
          alt=""
        />
      </div>
    </div>
  );
};

export default EmotionRecognition;
