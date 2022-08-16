import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <path
        d="M149.6 171.8h691.9c47.2 0 85.9 37.7 86.5 83.9L495.7 493 63.5 256c0.4-46.4 38.8-84.2 86.1-84.2z m-86.1 175l-0.4 419.6c0 46.7 38.9 84.9 86.5 84.9h691.9c47.6 0 86.5-38.2 86.5-84.9V346.6L505.9 572.8c-6.5 3.5-14.3 3.5-20.7 0l-421.7-226z"
        p-id="8449"
      />
    </Svg>
  );
};

export default Icon;
