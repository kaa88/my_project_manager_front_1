import { ReactNode } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

export const StoreProvider = ({ children }: { children: ReactNode }) => (
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      {children}
    </PersistGate>
  </Provider>
);
