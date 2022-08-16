import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { BaseButtonProps, PolymorphicComponent, variants } from "../Button/types";
import { ButtonMenuItemProps } from "./types";

interface InactiveButtonProps extends BaseButtonProps {
  forwardedAs: BaseButtonProps["as"];
}

const InactiveButton: PolymorphicComponent<InactiveButtonProps, "button"> = styled(Button)<InactiveButtonProps>`
  background-color: transparent;
  color: #6F767E;
  &:hover:not(:disabled):not(:active) {
    background-color: transparent;
  }
  height: 46px;
  font-weight : normal;
`;

const ActiveButton: PolymorphicComponent<BaseButtonProps, "button"> = styled(Button)<BaseButtonProps>`
  background-color: ${({ isDark }) => isDark? '#272B30':'white'};
  color: ${({ isDark }) => isDark? 'white':'black'};
  &:hover:not(:disabled):not(:active) {
    background-color: ${({ isDark }) => isDark? '#272B30':'white'};
  }
  box-shadow: ${({ isDark }) => isDark? '0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.06)':'0px 4px 8px -4px rgba(0, 0, 0, 0.25), inset 0px -1px 1px rgba(0, 0, 0, 0.04), inset 0px 2px 0px rgba(255, 255, 255, 0.25)'}!important;
  border-radius: 12px;
  height: 46px;
  font-weight : normal;
`;

const ButtonMenuItem: PolymorphicComponent<ButtonMenuItemProps, "button"> = ({
  isActive = false,
  variant = variants.PRIMARY,
  as,
  ...props
}: ButtonMenuItemProps) => {
  if (!isActive) {
    return <InactiveButton forwardedAs={as} variant={variant} {...props} />;
  }

  return <ActiveButton as={as} variant={variant} {...props} />;
};

export default ButtonMenuItem;
