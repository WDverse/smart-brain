import React from "react";
import "../../styles/linkForm.css";

const LinkForm = ({ onInputChange, onURLSubmit }) => {
  return (
    <div>
      <p className="f3">
        {`This Smart Brain will detect emotions of faces in your close-cropped face images.`}
      </p>
      <p className="f3">
        {`Paste image URL to give it a try!`}
      </p>

      <div className="center">
        <div className=" form center pa4 br3 shadow-5">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onChange={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onURLSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkForm;
