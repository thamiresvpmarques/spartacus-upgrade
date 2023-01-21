import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/theme";
import { AppRouter } from "./pages/routes";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
