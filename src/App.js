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
  var pics = Array('/photos/rodel2.png', '/photos/rodel.png', '/photos/bassoon.jpeg')

  useEffect(() => {
    // Every 2 seconds add another image
    const interval = setInterval(() => {
      if (!window.innerWidth || !window.innerHeight) { 
        return
      }
      let x = getRandomInt(10, window.innerWidth - 10);
      let y = getRandomInt(10, window.innerHeight - 10);
      let size = getRandomInt(50, 400);
      const img = {
        url: pics[Math.floor(Math.random() * pics.length)],
        x: x,
        y: y,
        size: size,
      };
      setImages([...images, img]);
      console.log(images);
      console.log(img);
    }, 3000);

    return () => clearInterval(interval)
  }, [images]);

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
};

export default App;
