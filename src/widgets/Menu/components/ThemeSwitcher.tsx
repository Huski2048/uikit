import React from "react";
import { SvgProps } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Flex from "../../../components/Box/Flex";
import Button from "../../../components/Button/Button";
import * as IconModule from "../icons";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../../hooks";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };
const { MoonIcon, SunIcon } = Icons;

interface Props {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
}

const ThemeButton = styled(Button)`
  background:transparent;
  background-image:unset;
  box-shadow: unset;
  padding: 0;
  height: fit-content;
  svg {
    margin-right: unset;
    fill: none;
  }
`;

const ThemeSwitcher: React.FC<Props> = ({ isDark, toggleTheme }) => {
  const { isMobile, isTablet } = useMatchBreakpoints();

  return (
    <ThemeButton onClick={() => toggleTheme(!isDark)} aria-label="theme-switcher-button">
      {/* alignItems center is a Safari fix */}
      {isDark ? (
        <SunIcon width="20px" height="20px" />
        ) : (
        <MoonIcon width="20px" height="20px" />
      )}
    </ThemeButton>
  );
};

export default React.memo(ThemeSwitcher, (prev, next) => prev.isDark === next.isDark);
