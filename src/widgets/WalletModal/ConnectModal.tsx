import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Grid from "../../components/Box/Grid";
import Box from "../../components/Box/Box";
import Flex from "../../components/Box/Flex";
import getThemeValue from "../../util/getThemeValue";
import Text from "../../components/Text/Text";
import Heading from "../../components/Heading/Heading";
import { Button } from "../../components/Button";
import { ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalTitle } from "../Modal";
import WalletCard, { MoreWalletCard } from "./WalletCard";
import config, { walletLocalStorageKey } from "./config";
import { Config, Login } from "./types";
import { useMatchBreakpoints } from "../../hooks";
import { MetamaskIcon } from "../../components/Svg";

interface Props {
  login: Login;
  onDismiss?: () => void;
  displayCount?: number;
  hasProvider: boolean;
}

const WalletWrapper = styled(Box)`
  padding : 0px 16px;
`;

/**
 * Checks local storage if we have saved the last wallet the user connected with
 * If we find something we put it at the top of the list
 *
 * @returns sorted config
 */
const getPreferredConfig = (walletConfig: Config[]) => {
  const preferredWalletName = localStorage.getItem(walletLocalStorageKey);
  const sortedConfig = walletConfig.sort((a: Config, b: Config) => a.priority - b.priority);

  if (!preferredWalletName) {
    return sortedConfig;
  }

  const preferredWallet = sortedConfig.find((sortedWalletConfig) => sortedWalletConfig.title === preferredWalletName);

  if (!preferredWallet) {
    return sortedConfig;
  }

  return [
    preferredWallet,
    ...sortedConfig.filter((sortedWalletConfig) => sortedWalletConfig.title !== preferredWalletName),
  ];
};

const ConnectModal: React.FC<Props> = ({ login, hasProvider, onDismiss = () => null, displayCount = 2 }) => {
  const { isDark } = useTheme();
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const sortedConfig = getPreferredConfig(config);
  const displayListConfig = showMore ? sortedConfig : sortedConfig.slice(0, displayCount);
  const { isMobile } = useMatchBreakpoints()
  const [showNoProvider, setShowNoProvider] = useState(false);
  const deviceType = (() => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    }
    else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
    }
    return "desktop";
  })();

  return (
    <ModalContainer minWidth={isMobile ? "320px" : "354px"}>
      <ModalHeader background={getThemeValue("colors.gradients.bubblegum")(theme)}>
        <ModalTitle>
          <Heading>Your Wallet</Heading>
        </ModalTitle>
        <ModalCloseButton onDismiss={onDismiss} />
      </ModalHeader>
      <ModalBody mb="24px">
        <WalletWrapper maxHeight="453px" overflowY="auto">
          {showNoProvider ?
            <>
              <Flex border="1px solid #efefef" borderRadius="10px" alignItems="center" p="10px 20px" justifyContent="space-around">
                <MetamaskIcon width="40px" />
                <Text >MetaMask</Text>
              </Flex>
              <Text textAlign="center" maxWidth="320px" mt="20px" mb={5}>{deviceType === 'tablet' || deviceType === 'mobile' ? ` Please access this site on MetaMask's in-app browser for a seamless experience` : `You'll need to install MetaMask to continue.
 Once you have it installed, go ahead and refresh the page. 
 `}</Text>
              <Button as="a" href="https://metamask.io/download" width="100%">Open MetaMask</Button>
            </>
            : <Grid gridTemplateColumns="1fr 1fr">
              {displayListConfig.map((wallet) => (
                <Box key={wallet.title}>
                  <WalletCard walletConfig={wallet} login={login} onDismiss={onDismiss} isDark={isDark} hasProvider={hasProvider} setShowNoProvider={setShowNoProvider} />
                </Box>
              ))}
              {/*             {!showMore && <MoreWalletCard onClick={() => setShowMore(true)} />} */}
            </Grid>}
        </WalletWrapper>
        {showNoProvider ? null : <Box p="24px" paddingBottom="0px">
          <Text textAlign="center" as="p" mb="16px" fontWeight={500}>
            Haven&#39;t got a crypto wallet yet?
          </Text>
          <Button
            as="a"
            style={{ borderRadius: "12px", height: "44px", fontSize: "16px" }}
            mt="10px "
            href="https://docs.huski.finance/how-to-guides-1/untitled"
            width="100%"
            {...getExternalLinkProps()}
          >
            Learn How to Connect
          </Button>
        </Box>}
      </ModalBody>
    </ModalContainer>
  );
};

export default ConnectModal;
