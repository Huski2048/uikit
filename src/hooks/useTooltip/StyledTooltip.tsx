import styled from "styled-components";

export const Arrow = styled.div`
  &,
  &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    z-index: -1;
  }

  &::before {
    content: "";
    transform: rotate(45deg);
    background: ${({ theme }) => theme.tooltip.background};
  }
`;

export const StyledTooltip = styled.div<{ bgcolor: string }>`
  padding : 4px 9px;
  font-size: 10px;
  line-height: 130%;
  border-radius: 4px;
  max-width: 320px;
  z-index: 101;
  background: ${({ theme }) => theme.tooltip.background};
  color: ${({ theme }) => theme.tooltip.text};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);

  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }

  &[data-popper-placement^="left"] > ${Arrow} {
    right: -4px;
  }

  &[data-popper-placement^="right"] > ${Arrow} {
    left: -4px;
  }
`;
