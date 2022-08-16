import React from "react";
import styled from "styled-components";
import { SvgProps } from "../../../components/Svg";
import Flex from "../../../components/Box/Flex";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Link from "../../../components/Link/Link";
import * as IconModule from "../icons";
import { socials } from "../config";
import { Text } from "../../..";

const Icons = (IconModule as unknown) as { [key: string]: React.FC<SvgProps> };

const SFlex = styled(Flex)`
  ${({ theme }) => theme.screen.phone} {
    margin: 10px 0 0 0;
  }
`;

const SocialLinks: React.FC = () => (
  <SFlex justifyContent="space-between" alignItems="center">
    {socials.map((social, index) => {
      const Icon = Icons[social.icon];
      const iconProps = { width: "20px", height: "20px", color: "#DFDFDF", style: { cursor: "pointer" } };
      const mr = index < socials.length - 1 ? "24px" : 0;
      if (social.items) {
        return (
          <Dropdown key={social.label} position="top" target={<Icon {...iconProps} />}>
            {social.items.map((item) => (
              <Link external key={item.label} href={item.href} aria-label={item.label}>
                {item.label}
              </Link>
            ))}
          </Dropdown>
        );
      }
      return (
        <Link external key={social.label} href={social.href} aria-label={social.label}>
          <Icon {...iconProps} />
        </Link>
      );
    })}
  </SFlex>
);

export default React.memo(SocialLinks, () => true);
