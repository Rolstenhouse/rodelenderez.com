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
  size: "",
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const App = () => {
  const [images, setImages] = useState([]);
  const pics = [
    "/photos/rodel2.png",
    "/photos/rodel.png",
    "/photos/bassoon.jpeg",
  ];

  useEffect(() => {
    // Every 2 seconds add another image
    const interval = setInterval(() => {
      if (!window.innerWidth || !window.innerHeight) {
        return;
      }
      let x = getRandomInt(0, window.innerWidth - 300);
      let y = getRandomInt(0, window.innerHeight - 300);
      let size = getRandomInt(50, 400);
      const img = {
        url: pics[Math.floor(Math.random() * pics.length)],
        x: x,
        y: y,
        size: size,
      };
      setImages([...images, img]);
    }, 1500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="App">
      <header className="App-header">
        <img src="/photos/rodel2.png" className="rotate" />
        {images.map((image) => {
          return (
            <img
              src={image.url}
              style={{
                position: "absolute",
                left: image.x,
                top: image.y,
                width: image.size,
              }}
              className="rotate"
            />
          );
        })}
        <div
          style={{
            width: "100%",
            height: 50,
            backgroundColor: "black",
            position: "fixed",
            bottom: 0,
            color: "white",
            fontSize: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <marquee scrollamount="15">
            made with ❤️ by
            <a
              style={{ display: "inline", margin: ".4em", color: "white" }}
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            >
              tyler
            </a>
            &
            <a
              style={{ display: "inline", margin: ".4em", color: "white" }}
              href="https://github.com/Rolstenhouse/rodelenderez.com"
            >
              rob
            </a>{" "}
          </marquee>
        </div>
      </header>
    </div>
  );
};

export default App;
