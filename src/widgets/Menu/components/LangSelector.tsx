import React from "react";
import Text from "../../../components/Text/Text";
import Dropdown from "../../../components/Dropdown/Dropdown";
import Button from "../../../components/Button/Button";
import LanguageIcon from "../../../components/Svg/Icons/Language";
import { Language } from "../types";
import MenuButton from "./MenuButton";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../../hooks";

interface Props {
  currentLang: string;
  langs: Language[];
  setLang: (lang: Language) => void;
}

const LangButton = styled(Button)`
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

const LangSelector: React.FC<Props> = ({ currentLang, langs, setLang }) => {
  const { isMobile, isTablet } = useMatchBreakpoints();
  const isSmallerScreen = isMobile || isTablet;

  return (
    <>
    </>
    // <Dropdown
    //   position={isSmallerScreen ? "top" : "bottom"}
    //   target={
    //     <LangButton aria-label="language-selector-button">
    //       <LanguageIcon width="20px" />
    //     </LangButton>
    //   }
    // >
    //   {langs.map((lang) => (
    //     <MenuButton
    //       key={lang.locale}
    //       fullWidth
    //       onClick={() => setLang(lang)}
    //       // Safari fix
    //       style={{ minHeight: "32px", height: "auto" }}
    //     >
    //       {lang.language}
    //     </MenuButton>
    //   ))}
    // </Dropdown>
  );
};

export default React.memo(LangSelector, (prev, next) => prev.currentLang === next.currentLang);
