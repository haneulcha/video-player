import { useEffect, useRef } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Control from "./components/Control";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    console.log("app", videoRef.current);
  }, [videoRef]);
  return (
    <div className="App">
      <VideoPlayer ref={videoRef} />
      <Control videoEl={videoRef} />
    </div>
  );
}

export default App;
