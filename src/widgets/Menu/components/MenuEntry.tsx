import React from "react";
import styled, { keyframes, DefaultTheme } from "styled-components";
import { Text } from "../../../components/Text";
import { Colors } from "../../../theme/types";
import { MENU_ENTRY_HEIGHT } from "../config";

export interface Props {
  secondary?: boolean;
  isActive?: boolean;
  isPushed?: boolean;
  theme: DefaultTheme;
  isDark?: boolean;
}

const rainbowAnimation = keyframes`
  0%,
  100% {
    background-position: 0 0;
  }
  50% {
    background-position: 100% 0;
  }
`;

const LinkLabel = styled.div<{ isPushed: boolean; isActive: boolean, secondary: boolean }>`
  color: ${({ secondary, isActive, theme, isPushed }) => (isPushed ?
    (!secondary ? (isActive ? 'white' : theme.colors.textSubtle) : (isActive ? 'white' : theme.colors.textSubtle)) : 'transparent')};
  transition: color 0.4s;
  flex-grow: 1;
`;

const MenuEntry = styled.div<Props>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: ${MENU_ENTRY_HEIGHT}px;
  // padding: ${({ secondary, isPushed, isActive }) => (!isPushed ? (secondary ? (isActive ? "0 14px" : "0 48px") : "0 15px") : (secondary ? "0 14px" : "0 15px"))};
  padding: ${({ isPushed }) => isPushed ? '0 10px' : '0'};
  font-size: ${({ secondary }) => (secondary ? "14px" : "16px")};
  font-weight: ${({ isActive }) => isActive ? "bold" : "normal"};
  background: ${({ isActive, secondary, isPushed }) =>
    isActive ? (secondary ? '#7B3FE4' : (!isPushed ? "#7B3FE4" : "#7B3FE4")) : "transparent"};
  border-radius: 10px;
  margin-bottom: 10px;
  // margin-left: ${({ isPushed }) => !isPushed ? '10px' : '0px'};
  // margin-right: ${({ isPushed }) => !isPushed ? '10px' : '0px'};
  // margin-left:${({ isActive, theme, secondary, isPushed }) => isActive ? (secondary ? '34px' : (!isPushed ? "0" : "0")) : "0"};
    ${({ isPushed }) => !isPushed && `width: fit-content; margin-left: auto; margin-right: auto;`}

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: ${({ isPushed }) => isPushed ? '0' : '10px'};
  }

  svg {
    fill:transparent;
    stroke: ${({ theme, isActive }) => (isActive ? 'white' : (theme.isDark ? '#6F767E' : '#6F767E'))};
  }

  // Safari fix
  flex-shrink: 0;

  &.rainbow {
    background-clip: text;
    animation: ${rainbowAnimation} 3s ease-in-out infinite;
    background: ${({ theme }) => theme.colors.gradients.bubblegum};
    background-size: 400% 100%;
  }
`;
MenuEntry.defaultProps = {
  secondary: false,
  isActive: false,
  isPushed: false,
};

const LinkStatus = styled(Text) <{ color: keyof Colors }>`
  border-radius: ${({ theme }) => theme.radii.card};
  padding: 0 8px;
  border: 2px solid;
  border-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: none;
  color: ${({ theme, color }) => theme.colors[color]};
  margin-left: 8px;
`;

const LinkLabelMemo = React.memo(
  LinkLabel,
  (prev, next) => prev.isPushed === next.isPushed && prev.isActive === next.isActive
);

export { MenuEntry, LinkStatus, LinkLabelMemo as LinkLabel };
