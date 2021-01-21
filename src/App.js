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
  var pics = Array('/photos/rodel2.png', '/photos/rodel.jpeg', '/photos/bassoon.jpeg')

  useEffect(() => {
    // Every 2 seconds add another image
    setInterval(()=>{
      let x = getRandomInt(10, window.innerWidth-10);
      let y = getRandomInt(10, window.innerHeight-10);
      console.log('hello')
      let size = getRandomInt(50, 400);
      const img = {
        url: pics[Math.floor(Math.random() * pics.length)],
        x: x,
        y: y,
        size: size,
      }
      setImages([...images, img])
    }, 2000)

  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {images.map((image) => {
          return (
            <img
              src={image.url}
              style={{
                position: "absolute",
                x: image.x,
                y: image.y,
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
