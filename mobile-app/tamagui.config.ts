import { config as configBase } from "@tamagui/config/v3";
import { createFont, createTamagui, createTokens } from "tamagui";

const { tokens: baseTokens, fonts, ...restBaseConfig } = configBase;

const typos = createFont({
  family: "Inter",
  size: {
    ...fonts.body.size,
    titleX: 64,
    title1: 32,
    title2: 24,
    title3: 18,
    regular1: 16,
    regular2: 16,
    regular3: 14,
    small: 13,
    tiny: 12,
  },
  lineHeight: {
    ...fonts.body.lineHeight,

    titleX: 80,
    title1: 34,
    title2: 22,
    title3: 22,
    regular1: 19,
    regular2: 19,
    regular3: 18,
    small: 16,
    tiny: 12,
  },
  weight: {
    ...fonts.body.weight,

    titleX: "700",
    title1: "700",
    title2: "600",
    title3: "600",
    regular1: "500",
    regular2: "600",
    regular3: "500",
    small: "500",
    tiny: "500",
  },
  letterSpacing: {
    ...fonts.body.letterSpacing,

    titleX: 0,
    title1: 0,
    title2: 0,
    title3: 0,
    regular1: 0,
    regular2: 0,
    regular3: 0,
    small: 0,
    tiny: 0,
  },
  face: {
    ...fonts.body.face,
    700: { normal: "InterBold" },
    500: { normal: "InterMedium" },
    600: { normal: "InterSemiBold" },
  },
});

// @ts-ignore
const tokens = createTokens({
  ...baseTokens,
  color: {
    "dark.25": "#7A7E80",
    "dark.50": "#212325",
    "dark.75": "#161719",
    "dark.100": "#0D0E0F",

    "light.20": "#91919F",
    "light.40": "#E3E5E5",
    "light.60": "#F1F1FA",
    "light.80": "#FCFCFC",
    "light.100": "#FFFFFF",

    "violet.20": "#EEE5FF",
    "violet.40": "#D3BDFF",
    "violet.60": "#B18AFF",
    "violet.80": "#8F57FF",
    "violet.100": "#7F3DFF",

    "red.20": "#FDD5D7",
    "red.40": "#FDA2A9",
    "red.60": "#FD6F7A",
    "red.80": "#FD5662",
    "red.100": "#FD3C4A",

    "green.20": "#CFFAEA",
    "green.40": "#93EACA",
    "green.60": "#65D1AA",
    "green.80": "#2AB784",
    "green.100": "#00A86B",

    "yellow.20": "#FCEED4",
    "yellow.40": "#FCDDA1",
    "yellow.60": "#FCCC6F",
    "yellow.80": "#FCBB3C",
    "yellow.100": "#FCAC12",

    "blue.20": "#BDDCFF",
    "blue.40": "#8AC0FF",
    "blue.60": "#57A5FF",
    "blue.80": "#248AFF",
    "blue.100": "#0077FF",
  },
});

export const config = createTamagui({
  tokens,
  fonts: {
    ...fonts,
    // @ts-ignore
    body: typos,
  },
  ...restBaseConfig,
});

export default config;

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
