import { Provider as StoreProvider } from "react-redux";
import { store } from "./store";

import { ConfigProvider as AntdConfigProvider } from "antd";
import { antdConfig } from "./antd/config";

import { Router } from "./routes/Router";

import "./styles/index.scss";

export const App = () => {
  return (
    <StoreProvider store={store}>
      <AntdConfigProvider {...antdConfig}>
        <Router />
      </AntdConfigProvider>
    </StoreProvider>
  );
};
