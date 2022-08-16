import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { MENU_ENTRY_HEIGHT } from "../config";
import { LinkLabel, LinkStatus as LinkStatusComponent, MenuEntry } from "./MenuEntry";
import { LinkStatus, PushedProps } from "../types";
import { AccordionIcon } from "../icons";
import { useHistory } from "react-router-dom";

interface Props extends PushedProps {
  label: string;
  status?: LinkStatus;
  icon: React.ReactElement;
  initialOpenState?: boolean;
  className?: string;
  children: ReactNode;
  isActive?: boolean;
  isDark?: boolean;
  jumpTo?: string;
}

const Container = styled.div<{ isPushed: boolean }>`
  display: flex;
  flex-direction: column;
  // Safari fix
  flex-shrink: 0;
  padding:${({ isPushed }) => (isPushed ? "0 15" : "0 0")};
`;

const LinkLabelText = styled(LinkLabel)`
  font-size: 14px;
`;

const AccordionContent = styled.div<{ isOpen: boolean; isPushed: boolean; maxHeight: number }>`
  max-height: ${({ isOpen, maxHeight }) => (isOpen ? `${maxHeight}px` : 0)};
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  margin-left: 32px;
  * {
    font-size: 14px;
  }
  > {
    margin-right: 0;
  }
`;
const Arrow = styled(AccordionIcon)`
width: 10px;
stroke: none !important;
*{
  stroke: none !important;
}
transition: transform 0.3s ease-out;
`;

const Accordion: React.FC<Props> = ({
  label,
  status,
  icon,
  isPushed,
  pushNav,
  initialOpenState = false,
  children,
  className,
  isActive,
  isDark,
  jumpTo
}) => {
  const [isOpen, setIsOpen] = useState(initialOpenState);
  const history = useHistory();
  const handleClick = () => {
    if (isPushed) {
      setIsOpen((prevState) => !prevState);
      jumpTo && !isOpen ? history.push(jumpTo) : null;
    } else {
      pushNav(true);
      setIsOpen(true);
    }
  };

  return (
    <Container isPushed={isPushed}>
      <MenuEntry isPushed={isPushed} onClick={handleClick} className={className} isActive={isActive} role="button" isDark={isDark} style={{ display: "flex", justifyContent: "center" }}>
        {icon}
        {
          isPushed ?
            <>
              <LinkLabelText isPushed={isPushed} isActive={isActive}>
                {label}
              </LinkLabelText>
              {status && (
                <LinkStatusComponent color={status.color} fontSize="14px">
                  {status.text}
                </LinkStatusComponent>
              )}
              {isOpen ? <Arrow style={{ transform: "rotate(-180deg)" }}/> : <Arrow  />}
            </>
            : null
        }
      </MenuEntry>
      <AccordionContent
        isOpen={isOpen}
        isPushed={isPushed}
        maxHeight={React.Children.count(children) * MENU_ENTRY_HEIGHT + React.Children.count(children) * 10}
      >
        {children}
      </AccordionContent>
    </Container>
  );
};

export default Accordion;
