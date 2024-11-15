import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../theme/theme";
import Layout from "../components/Layout/Layout";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout />
    </ThemeProvider>
  );
};

export default App;
