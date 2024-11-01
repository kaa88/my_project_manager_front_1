import { StoreProvider } from "./store";
import { RouterProvider } from "./routes";
import { ThemeProvider } from "./styles";

export const App = () => {
  return (
    <StoreProvider>
      <ThemeProvider>
        <RouterProvider />
      </ThemeProvider>
    </StoreProvider>
  );
};
