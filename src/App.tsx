import { useEffect, useRef } from "react";
import VideoPlayer from "./components/VideoPlayer";
import Control from "./components/Control";
import VideoContextProvider from "./store/useVideoStore";

function App() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    console.log("app", videoRef.current);
  }, [videoRef]);
  return (
    <div className="App">
      <VideoContextProvider>
        <VideoPlayer ref={videoRef} />
        <Control videoEl={videoRef} />
      </VideoContextProvider>
    </div>
  );
}

export default App;
