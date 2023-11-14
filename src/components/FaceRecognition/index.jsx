import React from "react";
import "../../styles/faceRecognition.css";

const FaceRecognition = ({ imageURL, box }) => {
  return !imageURL ? (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          className="shadow-5 br3"
          src={`https://image.cnbcfm.com/api/v1/image/104819285-thor.jpg?v=1529476684&w=1600&h=900`}
          width="500"
          height="auto"
          alt=""
        />
      </div>
    </div>
  ) : (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          className="shadow-5 br3"
          src={imageURL}
          width="500"
          height="auto"
          alt=""
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
