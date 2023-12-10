import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  return isSignedIn ? (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("signOut")}
        id="signOut"
        className="f3 link dim black underline pa3 pointer"
      >
        Sign Out
      </p>
    </nav>
  ) : (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        onClick={() => onRouteChange("signIn")}
        id="signOut"
        className="f3 link dim black underline pa3 pointer"
      >
        Sign In
      </p>
      <p
        onClick={() => onRouteChange("register")}
        id="signOut"
        className="f3 link dim black underline pa3 pointer"
      >
        Register
      </p>
    </nav>
  );
};

export default Navigation;
