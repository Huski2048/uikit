import React from "react";
import styled from "styled-components";
import IconButton from "../../../components/Button/IconButton";
import { PanelProps, PushedProps } from "../types";
import ThemeSwitcher from "./ThemeSwitcher";
import SocialLinks from "./SocialLinks";
import LangSelector from "./LangSelector";
import { Text } from "../../../components/Text";
import { Link } from "react-router-dom";
import Flex from "../../../components/Box/Flex";
import { HamburgerCloseIcon } from "../icons";
import { useMatchBreakpoints } from "../../../hooks";
import { Box } from "../../../components/Box";
import { Skeleton } from "../../../components/Skeleton";
import { Button } from "../../../components/Button";
import { LogoIcon, MetamaskIcon } from "../../../components/Svg";

interface Props extends PanelProps, PushedProps {}

const Container = styled.footer<{ isPushed: boolean }>`
  margin-bottom: 1rem;
`;
const HuskiPriceContainer = styled(Flex)<{ isPushed: boolean }>`
  flex-flow: ${({ isPushed }) => (isPushed ? "row" : "column")};
  align-items: center;
  background: #7b3fe4;
  padding: ${({ isPushed }) => (!isPushed ? "14px 12px" : "13.25px")};
  margin: ${({ isPushed }) => (!isPushed ? "0 10px" : "0px")};
  width: ${({ isPushed }) => (!isPushed ? "initial" : "100%")};
  border-radius: ${({ isPushed }) => (isPushed ? "8px;" : "8px")};
  ${({ theme }) => theme.mediaQueries.lg} {
    box-shadow: ${({ theme }) => theme.card.boxShadow};
  }
  button {
    height: unset;
    background-color: ${({ theme }) => theme.colors.bronze};
    padding: 4px 21px;
    font-size: 16px;
    box-shadow: none;
    border-radius: 5px;
    background: white;
    color: #6f767e;
  }
`;
const SocialEntry = styled.div``;
const StyledButton = styled(Button)`
  font-size: 12px !important;
  width: 40px;
  border-radius: 10px;
  background-color: white;
  color: #6f767e;
`;

const BuyLogo = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ffffff;
  border-radius: 30px;
  padding: 1.5px;
`;

const FoxBlock = styled(Flex)`
   height: 20px;
    display: flex;
    align-items: center;  
`

const PlusText = styled.div`
    position: relative;
    width: 7px;
    left: -7px;
    top: -5px;
    font-family: 'Gen Jyuu Gothic P';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    -webkit-letter-spacing: -0.01em;
    -moz-letter-spacing: -0.01em;
    -ms-letter-spacing: -0.01em;
    letter-spacing: -0.01em;
    color: #FFFFFF;
    -webkit-transform: matrix(1,0,0,-1,0,0);
    -ms-transform: matrix(1,0,0,-1,0,0);
    transform: matrix(1,0,0,-1,0,0);
`

const PanelFooter: React.FC<Props> = ({
  isPushed,
  pushNav,
  toggleTheme,
  isDark,
  currentLang,
  langs,
  setLang,
  huskiPriceUsd,
}) => {
  const { isMobile, isTablet } = useMatchBreakpoints();
  const isSmallerScreen = isMobile;

  if (!isPushed) {
    return (
      <Container
        isPushed={isPushed}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <HuskiPriceContainer isPushed={isPushed} width="100%">
          <BuyLogo>
            <LogoIcon width="100%" />
          </BuyLogo>
          <StyledButton mt="5px">Buy</StyledButton>
        </HuskiPriceContainer>
        <IconButton
          variant="text"
          onClick={() => pushNav(true)}
          mx="auto"
          aria-label="menu-button"
        >
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        </IconButton>
      </Container>
    );
  }

  return (
    <Container isPushed={isPushed}>
      {isPushed && (
        <HuskiPriceContainer isPushed={isPushed}>
          <BuyLogo>
            <LogoIcon width="100%" />
          </BuyLogo>
          <Flex flexDirection="column" mr="auto" ml="10px">
            <Text color="white" bold fontSize="14px">
              HUSKI
            </Text>
            <FoxBlock mt="1rem">
              <MetamaskIcon />
              <PlusText>
                +
              </PlusText>
            </FoxBlock>
          </Flex>
          <Flex flexDirection="column" alignItems="flex-end">
            {huskiPriceUsd ? (
              <Text
                color="white"
                fontSize="14px"
                fontWeight="bold"
              >{`$${huskiPriceUsd}`}</Text>
            ) : (
              <Skeleton height="1rem" width="50px" />
            )}
            <StyledButton mt="1rem">Buy</StyledButton>
          </Flex>
        </HuskiPriceContainer>
      )}
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mt={isSmallerScreen ? "10px" : "0"}
      >
        <Text
          color={isDark ? "#6F767E" : "#C5C3C3"}
          as={Link}
          to={{ pathname: "https://docs.huski.finance/" }}
          target="_blank"
        >
          Docs
        </Text>
        {isSmallerScreen ? null : (
          <IconButton
            variant="text"
            width="fit-content !important"
            onClick={() => pushNav(false)}
            aria-label="menu-button"
          >
            <HamburgerCloseIcon width="24px" color="textSubtle" />
          </IconButton>
        )}
        {isSmallerScreen && (
          <Flex style={{ gap: "10px" }}>
            <LangSelector
              currentLang={currentLang}
              langs={langs}
              setLang={setLang}
            />
            <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
          </Flex>
        )}
      </Flex>
      <SocialEntry>
        <SocialLinks />
      </SocialEntry>
    </Container>
  );
};

export default PanelFooter;
