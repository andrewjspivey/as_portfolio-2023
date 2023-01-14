import Home from "./Components/Home/Home";
import Nav from "./Components/Nav/Nav";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Nav />
      <Home />
    </ThemeProvider>
  );
}

export default App;
