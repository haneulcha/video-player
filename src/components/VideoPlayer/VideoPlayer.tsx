import Hls from "hls.js";
import { MutableRefObject, forwardRef, useEffect, useRef } from "react";

const URL = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
const hlsConfig = {
  debug: true,
  enableWorker: true,
  lowLatencyMode: true,
  backBufferLength: 90,
};

interface Props {
  url?: string;
}

const VideoPlayer = forwardRef<
  HTMLVideoElement,
  React.PropsWithChildren<Props>
>((props, videoRef) => {
  const innerRef = useRef<HTMLVideoElement>(null);
  const hls = useRef(new Hls(hlsConfig));

  const onLoadedData = () => {
    console.log("levels", hls.current.levels);
    console.log("curlevels", hls.current.currentLevel);
  };

  useEffect(() => {
    if (!innerRef.current) return;
    const hlsInstance = hls.current;
    if (Hls.isSupported()) {
      hlsInstance.loadSource(URL);
      hlsInstance.attachMedia(innerRef.current);
    } else if (innerRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      innerRef.current.src = URL;
    }
    console.log("videoref", videoRef);

    return () => {
      if (hlsInstance) {
        hlsInstance.destroy();
      }
    };
  }, []);

  return (
    <>
      <video
        id="video"
        ref={(element) => {
          if (!element || !videoRef) return;
          (innerRef as MutableRefObject<HTMLVideoElement>).current = element;
          if (typeof videoRef === "function") {
            videoRef(element);
          } else {
            videoRef.current = element;
          }
        }}
        controls
        controlsList="nodownload"
        playsInline={true}
        //   muted={store.shouldMobileDefaultMuted ? true : options?.muted ?? false}
        //   autoPlay={isShowActions ? false : options?.autoplay ?? true}
        preload="metadata"
        //   onLoadStart={onLoadStart}
        //   onLoadedMetadata={onLoadedMetadata}
        onLoadedData={onLoadedData}
        //   onCanPlay={onCanPlay}
        //   onCanPlayThrough={onCanPlayThrough}
        //   onWaiting={onWaiting}
        //   onSeeking={onSeeking}
        //   onSeeked={onSeeked}
        //   onPlaying={onPlaying}
        //   onProgress={onProgress}
        //   onTimeUpdate={onTimeUpdate}
        //   onPause={onPause}
        //   onEnded={onEnded}
        //   src={getHighestQualityVideoItem(video.transcodings)?.url}
        //   poster={getVideoThumbnailUrl(video.thumbnails, 'highest')}
      />
    </>
  );
});

export default VideoPlayer;
