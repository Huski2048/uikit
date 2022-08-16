import styled from "styled-components";
import { OverlayProps } from "./types";

const Overlay = styled.div.attrs({ role: "presentation" }) <OverlayProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: ${({ show, theme }) => (show ? theme.isDark ? '#F4F4F440' : '#14141440' : '#FFFFFF00')};
  backdrop-filter: ${({show}) => show ? 'blur(5px)' : 'none'};
  transform: matrix(-1, 0, 0, 1, 0, 0);
  transition: background-color 0.4s;
  // opacity: ${({ show }) => (show ? 0.25 : 0)};
  z-index: ${({ zIndex }) => zIndex};
  pointer-events: ${({ show }) => (show ? "initial" : "none")};
`;

Overlay.defaultProps = {
  show: false,
  zIndex: 10,
};

export default Overlay;
