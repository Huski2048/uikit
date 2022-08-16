import React from "react";
import Flex from "../../../components/Box/Flex";
import { Text } from "../../../components/Text";
import { LogoIcon } from "../../../components/Svg";
import { Box } from "../../../components/Box";
import styled from "styled-components";


export const HuskiLogo = () => {
  return <Box
    width="37.5px"
    height="37.5px"
    mx="auto"
  >
    <LogoIcon width="100%" height="100%" />
  </Box>
};
export const HuskiLogoWithText = () => {
  return (
    <Flex alignItems="center">
      <Box
        width="37.5px"
        height="37.5px"
      >
        <LogoIcon width="100%" height="100%" />
      </Box>
      <LogoText  style={{whiteSpace: "nowrap"}}>
        Huski Finance
      </LogoText>
    </Flex>
  );
};

const LogoText = styled(Text)`
  font-size: 17px;
  color: #9054DB;
  font-family: "GenJyuuGothic";
  font-weight: 700;
  letter-spacing: -0.3px;
  margin-left: 8.5px;
`
