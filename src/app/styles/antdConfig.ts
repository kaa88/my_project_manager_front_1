import { ConfigProviderProps } from "antd";
import { AliasToken } from "antd/es/theme/internal";

export type AntdThemeProps = Partial<AliasToken>;

const fonts: AntdThemeProps = {
  fontFamily:
    "Roboto, 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  // fontSize: 20, // default 14
};

const colors: AntdThemeProps = {
  // colorBgBase: "#aaa", // eg. input bg color
  // colorTextBase: "blue", // css 'color'
  // colorPrimary: "cyan",
  // colorInfo: "cyan",
  // colorLink: "cyan",
  // colorSuccess: "lime",
  // colorWarning: "yellow",
  // colorError: "pink",
  // colorBgMask: 'dsf',
};

// if (colors.colorSuccess)
//   document.body.setAttribute("--body-bg-color", colors.colorSuccess);
// document.body.style.backgroundColor = colors.colorSuccess;

const breakpoints: AntdThemeProps = {};

const sizes: AntdThemeProps = {};

export const antdConfig: ConfigProviderProps = {
  theme: {
    token: {
      ...fonts,
      ...colors,
      ...breakpoints,
      ...sizes,
    },
    // algorithm: theme.darkAlgorithm, // ?
    components: {
      // Button
      // Input
      // import from shared/ui components
    },
  },
};
