import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { Flex } from "../../components/Box";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import Panel from "./components/Panel";
import LangSelector from "./components/LangSelector";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { NavProps } from "./types";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { useLocation } from "react-router-dom";
import { HamburgerCloseIcon } from "./icons";
import MenuButton from "./components/MenuButton";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledNav = styled(Flex) <{ isPushed: boolean; isHome?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
    padding: 15px 15px 0;
  ${({ theme }) => theme.mediaQueries.md} {
    padding: 13px 20px 0;
  }
  ${({ theme }) => theme.mediaQueries.xxl} {
    padding: 23px 33.75px 0;
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: flex-end;
  }
  z-index: 20;
  // transform: translate3d(0, 0, 0);
 svg {
    margin-right: unset;
    fill: none;
  }
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean; isHome: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed, isHome }) => `${isPushed ? SIDEBAR_WIDTH_FULL : isHome ? 0 : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed, isHome }) =>
    `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : isHome ? 0 : SIDEBAR_WIDTH_REDUCED}px)`};
  }
  ${({ theme }) => theme.mediaQueries.lg} {
    height: ${({ isHome }) => isHome ? "100vh" : null};
    overflow: ${({ isHome }) => isHome ? "auto" : null};
     &::-webkit-scrollbar {
    display: ${({ isHome }) => isHome ? "none" : null};
  }

    -ms-overflow-style: ${({ isHome }) => isHome ? "none" : null}; /* IE and Edge */
    scrollbar-width: ${({ isHome }) => isHome ? "none" : null};/* Firefox */
  }
  
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;
const SettingsWrapper = styled.div`
  display: flex;
  align-items: center;
  >*:not(:last-child) { // dont apply to last 2 elements (wallet button and its dropdown)
  margin-right: 20px;
}
`;

const Menu: React.FC<NavProps> = ({
  userMenu,
  globalMenu,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  links,
  children,
  huskiPriceUsd,
}) => {
  const { pathname } = useLocation();
  const isHome = pathname === "//";
  const { isMobile, isTablet, isMd } = useMatchBreakpoints();
  const isSmallerScreen = isMobile || isTablet;
  const [isPushed, setIsPushed] = useState(!isSmallerScreen);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  const routesToExclude = ["//", "/privacy-policy", "/terms-conditions"];

  useEffect(() => {
    if (!isSmallerScreen) {
      setIsPushed(!routesToExclude.includes(pathname));
      // array to regex
    }
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, [pathname, isSmallerScreen]);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <BodyWrapper>
        {!isHome && (
          <Panel
            isPushed={isPushed}
            isMobile={isSmallerScreen}
            showMenu={showMenu}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            huskiPriceUsd={huskiPriceUsd}
            pushNav={setIsPushed}
            links={links}
            togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          />
        )}
        <Inner isPushed={isPushed} showMenu={showMenu} isHome={isHome}>

          {isHome ? null :
            <StyledNav isPushed={isPushed} isHome={isHome} mx="auto" as="nav">
              {(isMobile || isMd) && pathname !== "//" && (
                <MenuButton aria-label="Toggle menu" onClick={() => setIsPushed((prevState: boolean) => !prevState)} style={{ padding: "0" }}>
                  <HamburgerCloseIcon width="24px" color="textSubtle" />
                </MenuButton>
              )}
              <SettingsWrapper>
                {isMobile ? null : (
                  <>
                    <ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme} />
                    {globalMenu}
                    {/* <LangSelector currentLang={currentLang} langs={langs} setLang={setLang} /> */}
                  </>
                )}
                <Flex>
                  {userMenu}
                </Flex>
              </SettingsWrapper>
            </StyledNav>
          }
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed && !isHome} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
