import styled from "styled-components";
import { variant as StyledSystemVariant } from "styled-system";
import { ImageProps, Variant, variants } from "./types";
import TokenImage from "./TokenImage";

interface StyledImageProps extends ImageProps {
  variant: Variant;
}

export const StyledPrimaryImage = styled(TokenImage)<StyledImageProps>`
  position: absolute;
  width: ${({ variant }) =>
    variant === variants.DEFAULT ? "100%" : "100%"}; // 92, 82 are arbitrary numbers to fit the variant

  ${StyledSystemVariant({
    variants: {
      [variants.DEFAULT]: {
        bottom: 0,
        left: 0,
        right:20,
        top: 0,
        zIndex: 5,
      },
      [variants.INVERTED]: {
        bottom: 0,
        left: 0,
        right: 20,
        top:0,
        zIndex: 6,
      },
    },
  })}
`;

export const StyledSecondaryImage = styled(TokenImage)<StyledImageProps>`
  position: absolute;
  width: 100%;

  ${StyledSystemVariant({
    variants: {
      [variants.DEFAULT]: {
        bottom: 0,
        left: -10,
        right: 0,
        top: 0,
        zIndex: 6,
      },
      [variants.INVERTED]: {
        bottom: 0,
        left: -10,
        right: 0,
        top: 0,
        zIndex: 5,
      },
    },
  })}
`;
