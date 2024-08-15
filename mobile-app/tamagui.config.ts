import { config as configBase } from "@tamagui/config/v3";
import { createTamagui, createTokens } from "tamagui";

const { tokens: baseTokens, ...restBaseConfig } = configBase;

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

export const config = createTamagui({ tokens, ...restBaseConfig });

export default config;

export type Conf = typeof config;

declare module "tamagui" {
  interface TamaguiCustomConfig extends Conf {}
}
