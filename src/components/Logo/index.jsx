import React from "react";
import Tilt from "react-parallax-tilt";
import "../../styles/logo.css";
import brainIcon from "../../assets/images/brain.png";

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="shadow-2  logo"
        glareEnable={true}
        glareMaxOpacity={0.9}
        glareColor="lightblue"
        glarePosition="all"
        style={{
          height: "100px",
          width: "100px",
          backgroundColor: "darkgreen",
        }}
      >
        <img alt="Logo" src={brainIcon} style={{ paddingTop: "10px" }}  height={80}/>
      </Tilt>
    </div>
  );
};

export default Logo;
