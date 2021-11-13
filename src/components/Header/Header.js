import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="bg-light.bg-gradient mb-4">
        <h2
          className="text-center"
          style={{ fontSize: "3.5em", marginTop: "3%" }}
        >
          👑
        </h2>
        <h1
          className="text-success m-3 text-center"
          style={{ fontSize: "3.5rem", fontFamily: "Lucida Handwriting" }}
        >
          <i>007</i> James Bond Movie Store
        </h1>
        <p className=".text-muted text-center mt-3">
          buy your favorite 007 DVD
        </p>
        <h1 className="text-center text-success">Total Budget: 99 million</h1>
        <hr className="hrHeader" />
      </div>
    </div>
  );
};

export default Header;
