import React, { useState, useEffect } from "react";
import "./styles.css";
import "video-react/dist/video-react.css";
import ReactPlayer from "react-player";
import Header from "./Header";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function App() {
  const [toggleTheme, setToggleTheme] = useState(
    () => JSON.parse(localStorage.getItem("toggleTheme")) || "light"
  );
  useEffect(() => {
    localStorage.setItem("toggleTheme", JSON.stringify(toggleTheme));
    document.body.classList.add(toggleTheme); 
    return () => {
      document.body.classList.remove(toggleTheme); 
      console.log("unmount");
    };
  }, [toggleTheme]); 
  const classes = `${toggleTheme} App`;

  const [name, setName] = useState(" ");
  const [playVideo, setPlayVideo] = useState("https://www.youtube.com/watch?v=TCL1-9hHTrs");

  const handleInput = event => {
    setName(event.target.value);
  };

  const logValue = () => {
    setPlayVideo(name);
  };

  return (
    <div className="App">
      <div>
        <Header/>
      </div>
      <div className="Additional Area">
      <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      style={{marginLeft:"auto", marginRight:"auto", marginTop:"25px"}}
    >
      <TextField fullWidth label="Video Link" id="fullWidth" onChange={handleInput}/>
    </Box>
    <Box
      sx={{
        width: 500,
        maxWidth: '100%',
      }}
      style={{marginLeft:"auto", marginRight:"auto", marginTop:"25px", marginBottom:"25px"}}
    >
      <Button variant="contained" color="success" onClick={logValue}>
         Play Video
      </Button>
      <Button variant="contained"  style={{marginLeft:"15px"}}
       className={classes}
       onClick={() => {
         return toggleTheme === "dark"
           ? setToggleTheme("light")
           : setToggleTheme("dark");
       }}>
         {toggleTheme === "dark"? "Light Mode" :"dark mode"}
      </Button>
    </Box>
      <div className="videoplayer">
        <ReactPlayer
        controls
        url= {playVideo}
        style={{marginLeft:"auto", marginRight:"auto", marginInlineStart:"10", marginTop:"100"}}
      />
      </div>
    </div>
    </div>
  );
}
