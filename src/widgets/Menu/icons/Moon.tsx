import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 19 20" fill="none" {...props}>
      <path d="M1.69158 10.3495C1.99158 14.6411 5.63325 18.1328 9.99158 18.3245C13.0666 18.4578 15.8166 17.0245 17.4666 14.7661C18.1499 13.8411 17.7832 13.2245 16.6416 13.4328C16.0832 13.5328 15.5082 13.5745 14.9082 13.5495C10.8332 13.3828 7.49991 9.97448 7.48325 5.94948C7.47491 4.86615 7.69991 3.84115 8.10825 2.90781C8.55825 1.87448 8.01658 1.38281 6.97491 1.82448C3.67491 3.21615 1.41658 6.54115 1.69158 10.3495Z" stroke="#6F767E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Icon;
