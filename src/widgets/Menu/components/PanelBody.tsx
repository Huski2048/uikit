import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { SvgProps } from "../../../components/Svg";
import * as IconModule from "../icons";
import Accordion from "./Accordion";
import { MenuEntry, LinkLabel, LinkStatus } from "./MenuEntry";
import MenuLink from "./MenuLink";
import { PanelProps, PushedProps } from "../types";
import { Flex } from "../../../components/Box";
interface Props extends PanelProps, PushedProps {
  isMobile: boolean;
}

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const Container = styled.div<{ isPushed: boolean }>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: 55vh;
`;

const LinkLabelFlex = styled(Flex)`
  font-size: 12px;
`;

const LinkLabelTitle = styled.div`
  font-size: 14px;
`;


const PanelBody: React.FC<Props> = ({ isPushed, pushNav, links, isMobile, isDark }) => {
  const location = useLocation();

  // Close the menu when a user clicks a link on mobile
  const handleClick = isMobile ? () => pushNav(false) : undefined;

  return (
    <Container isPushed={isPushed}>
      <div>
        {links.map((entry) => {
          const Icon = Icons[entry.icon];
          const iconElement = <Icon width="24px" mr={isPushed ? "8px" : "0px"} stroke="black" />;
          const calloutClass = entry.calloutClass ? entry.calloutClass : undefined;

          if (entry.items) {
            const itemsMatchIndex = entry.items.findIndex((item) => item.href === location.pathname);
            const initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;

            return (
              <Accordion
                key={entry.label}
                isPushed={isPushed}
                pushNav={pushNav}
                icon={iconElement}
                label={entry.label}
                status={entry.status}
                initialOpenState={initialOpenState}
                className={calloutClass}
                isActive={false}
                isDark={isDark}
                jumpTo={entry.jumpTo}
              >
                {isPushed &&
                  entry.items.map((item) => (
                    <MenuEntry isPushed={isPushed} key={item.href} secondary isActive={location.pathname.includes(item.href)}  isDark={isDark}>
                      <MenuLink href={item.href}>
                        <LinkLabel secondary isPushed={isPushed} isActive={location.pathname.includes(item.href)}>
                          <LinkLabelFlex alignItems="center" justifyContent="space-between">
                            {item.label}
                          </LinkLabelFlex>
                        </LinkLabel>
                        {item.status && (
                          <LinkStatus color={item.status.color} fontSize="12px">
                            {item.status.text}
                          </LinkStatus>
                        )}
                      </MenuLink>
                    </MenuEntry>
                  ))}
              </Accordion>
            );
          }
          return (
            <MenuEntry key={entry.label} isPushed={isPushed} isActive={location.pathname.includes(entry.href as string)} className={calloutClass} isDark={isDark}>
              <MenuLink href={entry.href}>
                {iconElement}
                {isPushed ?
                  <>
                    <LinkLabel isPushed={isPushed} isActive={location.pathname.includes(entry.href as string)}>
                      <LinkLabelTitle>
                      {entry.label}
                      </LinkLabelTitle>
                      
                    </LinkLabel>
                    {entry.status && (
                      <LinkStatus color={entry.status.color} fontSize="14px">
                        {entry.status.text}
                      </LinkStatus>
                    )}
                  </>
                  : null}
              </MenuLink>
            </MenuEntry>
          );
        })}
      </div>



    </Container>
  );
};

export default PanelBody;
