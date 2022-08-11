import { RefObject, useContext, useEffect } from "react";
import { VideoContext } from "../../store/useVideoStore";
interface Props {
  videoEl: RefObject<HTMLVideoElement>;
}

function Control({ videoEl }: Props) {
  const videoStore = useContext(VideoContext);
  useEffect(() => {
    console.log("ref in control", videoEl);
  });

  useEffect(() => {
    console.log({ videoStore });
  }, [videoStore]);

  return <div>컨트롤</div>;
}

export default Control;
