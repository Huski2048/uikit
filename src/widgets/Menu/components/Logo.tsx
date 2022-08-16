import React from "react";
import styled, { keyframes } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useMatchBreakpoints } from "../../../hooks";
import Flex from "../../../components/Box/Flex";
import { HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";
import { HuskiLogo, HuskiLogoWithText } from "../icons/HuskiLogo";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
}

const blink = keyframes`
  0%,  100% { transform: scaleY(1); } 
  50% { transform:  scaleY(0.1); } 
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 25px 0;
  ${({ theme }) => theme.screen.tablet} {
    padding: 9px 0;
  }
  ${({ theme }) => theme.screen.phone} {
    padding: 10px 0;
  }
  .mobile-icon {
    width: 32px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 160px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
  .right-eye {
    animation-delay: 20ms;
  }
  &:hover {
    .left-eye,
    .right-eye {
      transform-origin: center 60%;
      animation-name: ${blink};
      animation-duration: 350ms;
      animation-iteration-count: 1;
    }
  }
`;

const Logo: React.FC<Props> = ({ isPushed, href, togglePush }) => {
  const { isMobile, isTablet, isMd } = useMatchBreakpoints();
  const isSmallerScreen = isMobile ;
  const isAbsoluteUrl = href.startsWith("http");
  const { pathname } = useLocation();
  const innerLogo = <>{isSmallerScreen ? <HuskiLogo /> : isPushed ? <HuskiLogoWithText  /> : <HuskiLogo />}</>;

  return (
    <Flex justifyContent={isPushed ? "initial" : "center"}>
      {(isMobile || isMd) && pathname !== "/" && (
        <MenuButton aria-label="Toggle menu" mr={isSmallerScreen ? "10px" : "24px"} onClick={togglePush}>
            <HamburgerCloseIcon width="24px" color="textSubtle" />
        </MenuButton>
      )}
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Huski home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Huski home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
