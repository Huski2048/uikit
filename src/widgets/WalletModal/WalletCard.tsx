import React from "react";
import styled from "styled-components";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import MoreHorizontal from "../../components/Svg/Icons/MoreHorizontal";
import { ButtonProps } from "../../components/Button";
import { connectorLocalStorageKey, walletLocalStorageKey } from "./config";
import { Login, Config, ConnectorNames } from "./types";

interface Props {
  walletConfig: Config;
  login: Login;
  onDismiss: () => void;
  isDark?: boolean;
  setShowNoProvider: (showProvider: boolean) => void;
  hasProvider: boolean;
}

const WalletButton = styled(Button).attrs({ width: "100%", variant: "text", py: "16px" }) <{ isDark?: boolean }>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  border: ${({ isDark }) => isDark ? 'none' : '1px solid #EFEFEF'};
  box-sizing: border-box;
  border-radius: 10px;
  width : 148px;
  height : 148px;
  background-color : ${({ isDark }) => isDark ? '#111315' : 'white'};
`;

export const MoreWalletCard: React.FC<ButtonProps> = (props) => {
  return (
    <WalletButton variant="tertiary" {...props}>
      <MoreHorizontal width="40px" mb="8px" color="textSubtle" />
      <Text fontSize="14px">More</Text>
    </WalletButton>
  );
};

const WalletCard: React.FC<Props> = ({ login, walletConfig, onDismiss, isDark, setShowNoProvider, hasProvider }) => {
  const { title, icon: Icon } = walletConfig;

  return (
    <WalletButton
      isDark={isDark}
      variant="tertiary"
      onClick={() => {
        if (walletConfig.title.toLocaleLowerCase() === "metamask") {

          // const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent); //&& !window.MSStream

          // Since iOS does not support Trust Wallet we fall back to WalletConnect
          //  if (walletConfig.title === "Trust Wallet" && isIOS) {
          //    login(ConnectorNames.WalletConnect);
          //  } else {
          //    login(walletConfig.connectorId);
          //  }
          if (hasProvider) {

            login(walletConfig.connectorId);

            localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
          } else {

            setShowNoProvider(true)
          }
        } else {
          // const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent); //&& !window.MSStream

          // Since iOS does not support Trust Wallet we fall back to WalletConnect
          // if (walletConfig.title === "Trust Wallet" && isIOS) {
          //   login(ConnectorNames.WalletConnect);
          // } else {
          //   login(walletConfig.connectorId);
          // }
          login(walletConfig.connectorId);

          localStorage.setItem(walletLocalStorageKey, walletConfig.title);
          localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
          onDismiss();
        }
      }}
      id={`wallet-connect-${title.toLocaleLowerCase()}`}
    >
      <Icon width="52px" mb="8px" />
      <Text fontSize="14px">{title}</Text>
    </WalletButton>
  );
};

export default WalletCard;
