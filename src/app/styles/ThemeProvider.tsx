import "./reset.scss";
import "./fonts.scss";

import { ReactNode } from "react";
import { ConfigProvider } from "antd";
import { antdConfig } from "./antdConfig";

export const ThemeProvider = ({ children }: { children: ReactNode }) => (
  <ConfigProvider {...antdConfig}>{children}</ConfigProvider>
);
