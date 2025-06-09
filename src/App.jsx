import { useState } from "react";
import ConfettiBackground from "./ConfettiBackground";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
      <div
        style={{
          minHeight: "100vh",
          width: "100vw",
          padding: "1rem",
          backgroundColor: darkMode
            ? "rgb(0, 0, 0)"
            : "rgba(255, 244, 235)",
          color: darkMode ? "#fff" : "#000",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          boxSizing: "border-box",
          position: "relative",
          zIndex: 2,
          overflowX: "hidden",
          overflow: "hidden"

        }}
      >
        <ConfettiBackground />
        <div
          style={{
            textAlign: "center",
            fontFamily:
              '"Century Gothic", CenturyGothic, AppleGothic, sans-serif',
           
          }}
        >
          <h1 style={{ color: darkMode ? "#fff" : "#DA6C6C",  fontSize: "2rem",}}>
            Feliz cumpleaños Víctor!!
          </h1>
           </div>
          <div
            style={{
              width: "100%",
              maxWidth: "1000px",
              margin: "0px",
              padding: "2rem", 
            }}
          >
            <div
              style={{
                position: "relative",
                paddingTop: "56.25%", // 16:9 aspect ratio
                width: "100%",
                borderRadius: "12px",
                
                
              }}
            >
              <video
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "12px",
                }}
                autoPlay
                muted
                loop
                controls
                playsInline
              >
                <source src="/HBD_Victor_cleanLine.mp4" type="video/mp4" />
                woopsy daisy
              </video>
            </div>
          </div>
          {/* Toggle button container */}
          <div
            style={{
              justifyContent: "flex-end",
              //width: "90%",
              display: "flex",
              boxSizing: "border-box",
              margin: "0 auto",
            }}
          >
            <div
              onClick={() => setDarkMode(!darkMode)}
              style={{
                display: "inline-block",
                cursor: "pointer",
                width: "50px",
                height: "28px",
                backgroundColor: darkMode ? "#333" : "#DA6C6C",
                borderRadius: "999px",
                position: "relative",
                userSelect: "none",
                marginLeft: "auto",
                marginRight: "0",
              }}
            >
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  backgroundColor: "#fff",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "3px",
                  left: darkMode ? "25px" : "3px",
                  transition: "left 0.3s",
                }}
              />
            </div>
          </div>
       
      </div>
  );
}

export default App;
