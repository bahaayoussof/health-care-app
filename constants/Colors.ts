const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

export const COLORS = {
  background: "#FAFAFA",
  primary: "#5A7D9A",
  secondary: "#8EB89F",
  text: "#333333",
  textSecondary: "#666666",
  textLight: "#999999",
  border: "#E0E0E0",
  cardBg: "#F5F5F5",
  disabled: "#CCCCCC",
  sliderBg: "#E8F4F8",
  white: "white",
} as const;
