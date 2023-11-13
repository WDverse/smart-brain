import React from "react";

const FaceRecognition = ({ imageURL }) => {
  return !imageURL ? (
    <div className="center ma">
        <div className="absolute mt2">
        <img
          className="shadow-5 br3"
          src={`https://image.cnbcfm.com/api/v1/image/104819285-thor.jpg?v=1529476684&w=1600&h=900`}
          width= '500'
          height='auto'
          alt=""
        />
        </div>
    </div>
  ) : (
    <div className="center ma">
        <div className="absolute mt2">
        <img
          className="shadow-5 br3"
          src={imageURL}
          width= '500'
          height='auto'
          alt=""
        />
        </div>
    </div>
  );
};

export default FaceRecognition;
