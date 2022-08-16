import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 8 4" fill="none" stroke="none !important" {...props}>
    <path d="M7.82271 0.150943C7.68975 0.0377357 7.51246 0 7.33518 0L0.686981 0.037736C0.509695 0.037736 0.33241 0.0754717 0.199446 0.188679C-0.066482 0.415094 -0.066482 0.754717 0.199446 0.981132L3.52355 3.81132C3.56787 3.84906 3.65651 3.88679 3.70083 3.92453L3.74515 3.96226C3.96676 4.03774 4.27701 4 4.45429 3.84906L7.77839 0.981132C8.08864 0.716981 8.04432 0.377358 7.82271 0.150943Z" fill="#6F767E"/>
    </Svg>
  );
};

export default Icon;
