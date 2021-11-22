import { RefObject, useEffect } from "react";
interface Props {
  videoEl: RefObject<HTMLVideoElement>;
}

const Control: React.FC<Props> = ({ videoEl }) => {
  useEffect(() => {
    console.log("ref in control", videoEl);
  });
  return <div>컨트롤</div>;
};

export default Control;
