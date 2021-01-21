import React, { useEffect, useState } from "react";

import logo from "./logo.svg";
import "./App.css";

/**
 *
 */
const imageType = {
  url: "",
  x: "",
  y: "",
  rotationSpeed: "",
};

const App = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        {images.map((image) => {
          return <img src={image.url} />;
        })}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
