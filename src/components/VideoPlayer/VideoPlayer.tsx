import React from "react";
// import Hls from "hls.js";
import { MutableRefObject, forwardRef, useEffect, useRef } from "react";

const LOCAL_URL = "/assets/test.mp4";
// const URL = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";
// const hlsConfig = {
//   debug: true,
//   enableWorker: true,
//   lowLatencyMode: true,
//   backBufferLength: 90,
// };

interface Props {
  url?: string;
}

const VideoPlayer = forwardRef<
  HTMLVideoElement,
  React.PropsWithChildren<Props>
>((props, videoRef) => {
  const innerRef = useRef<HTMLVideoElement>(null);
  // const hls = useRef(new Hls(hlsConfig));

  // useEffect(() => {
  //   if (!innerRef.current) return;
  //   const hlsInstance = hls.current;
  //   if (Hls.isSupported()) {
  //     hlsInstance.loadSource(URL);
  //     hlsInstance.attachMedia(innerRef.current);
  //   } else if (innerRef.current.canPlayType("application/vnd.apple.mpegurl")) {
  //     innerRef.current.src = URL;
  //   }

  //   return () => {
  //     if (hlsInstance) {
  //       hlsInstance.destroy();
  //     }
  //   };
  // }, []);

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
        // onLoadedData={onLoadedData}
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
      >
        <source src={LOCAL_URL} type="video/mp4" />
      </video>
    </>
  );
});

export default VideoPlayer;
