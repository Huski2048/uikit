import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Lend",
    icon: "LendIcon",
    href: "/lend",
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    initialOpenState: true,
    jumpTo: "farms",
    items: [
      {
        label: "Single Assets",
        href: "/single-assets",
      },
      {
        label: "Advanced Farm",
        href: "/farms",
      },
    ],
  },
  {
    label: "Stake",
    icon: "StakeIcon",
    href: "/stake",
  },
  {
    label: "HODL & Lockup",
    icon: "LockIcon",
    href: "/lock",
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "English",
        href: "https://t.me/HuskiFinance",
      },
      {
        label: "Chinese",
        href: "https://t.me/HuskiFinanceCN",
      },
      {
        label: "Korean",
        href: "https://t.me/HuskiFinanceKR",
      },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/HuskiFinance",
  },
  {
    label: "GitHub",
    icon: "GithubIcon",
    href: "https://github.com/huskifinance",
  },
  {
    label: "Medium",
    icon: "MediumIcon",
    href: "https://medium.com/@huskifinance",
  },
  {
    label: "Discord",
    icon: "DiscordIcon",
    href: "https://discord.com/channels/869829725365870592/869829725365870595",
  },
  {
    label: "YouTube",
    icon: "YoutubeIcon",
    href: "https://www.youtube.com/channel/UCNpztgANmzvxhtScQmEh_Og",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 40;
export const SIDEBAR_WIDTH_FULL = 195;
export const SIDEBAR_WIDTH_REDUCED = 100;
// export const SIDEBAR_WIDTH_FULL_PCT = 13;
// export const SIDEBAR_WIDTH_REDUCED_PCT = 5;
