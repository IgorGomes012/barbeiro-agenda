"use client";

import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
