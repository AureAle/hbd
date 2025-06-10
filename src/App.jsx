import { useState, useRef, useEffect } from "react";
import ConfettiBackground from "./ConfettiBackground";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const lightVideoRef = useRef(null);
  const darkVideoRef = useRef(null);



  // On toggle, play the newly visible video immediately (for Chrome autoplay)
  const handleToggle = () => {
    setDarkMode((prev) => {
      const next = !prev;
      // Play new video on toggle immediately
      const videoToPlay = next ? darkVideoRef.current : lightVideoRef.current;
      if (videoToPlay) {
        videoToPlay.currentTime = 0;
        const playPromise = videoToPlay.play();
        if (playPromise !== undefined) {
          playPromise.catch((e) => {
            console.warn("Play failed:", e);
          });
        }
      }
      return next;
    });
  };

  // On mount, start both videos playing muted and looping
  useEffect(() => {
    if (lightVideoRef.current) lightVideoRef.current.play().catch(() => {});
    if (darkVideoRef.current) darkVideoRef.current.play().catch(() => {});
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        padding: "1rem",
        backgroundColor: darkMode ? "rgb(0, 0, 0)" : "rgba(255, 244, 235)",
        color: darkMode ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        boxSizing: "border-box",
        position: "relative",
        zIndex: 2,
        overflowX: "hidden",
        overflow: "hidden",
      }}
    >
      <ConfettiBackground />
      <div
        style={{
          textAlign: "center",
          fontFamily: '"Futura"',
        }}
      >
        <h1 style={{ margin: "0px", color: darkMode ? "#fff" : "#DA6C6C", fontSize: "3rem" }}>
          Feliz cumpleaños Víctor!!
        </h1>
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0px",
          padding: "1rem",
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
          {/* Light Video */}
          <video
            ref={lightVideoRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              transition: "opacity 0.8s ease-in-out",
              opacity: darkMode ? 0 : 1,
              pointerEvents: "none",
            }}
            autoPlay={!darkMode}
            muted
            loop
            playsInline
            //controls
          >
            <source src="/hbd/HBD_Victor_Enhanced.mp4" type="video/mp4" />
          </video>
          {/* Dark Mode Video */}
          <video
            ref={darkVideoRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "12px",
              transition: "opacity 0.8s ease-in-out",
              opacity: darkMode ? 1 : 0,
              pointerEvents: "none",
            }}
            autoPlay={darkMode}
            muted
            loop
            playsInline
            //controls
          >
            <source src="/hbd/HBD_Victor_dark.mp4" type="video/mp4" />
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
          onClick={handleToggle}
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
