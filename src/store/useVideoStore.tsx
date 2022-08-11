import { createContext } from "react";

interface Context {
  duration: number;
}

interface Props {
  children: React.ReactNode;
}

const defaultValue: Context = {
  duration: 0,
};

export const VideoContext = createContext(defaultValue);

export default function VideoContextProvider(props: Props) {
  return (
    <VideoContext.Provider value={defaultValue}>
      {props.children}
    </VideoContext.Provider>
  );
}
