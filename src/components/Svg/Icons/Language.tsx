import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 20 20" fill="none" {...props}>
    <path d="M10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25Z" stroke="#6f767e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.9999 2.625H7.8749C6.16865 7.735 6.16865 13.265 7.8749 18.375H6.9999" stroke="#6f767e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.125 2.625C14.8313 7.735 14.8313 13.265 13.125 18.375" stroke="#6f767e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.625 14V13.125C7.735 14.8313 13.265 14.8313 18.375 13.125V14" stroke="#6f767e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.625 7.87539C7.735 6.16914 13.265 6.16914 18.375 7.87539" stroke="#6f767e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Svg>
  );
};

export default Icon;
