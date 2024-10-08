import { Provider } from "react-redux";
import { store } from "../shared/store";
import { Router } from "./routes/Router";
import "./styles/index.scss";

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
