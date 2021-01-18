import { useState, useEffect } from "react";
import GlobalStyles from "../styles/global";
import { AppProps } from "next/app";
import { DefaultTheme, ThemeProvider } from "styled-components";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

let toggleTheme: Function;

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
    localStorage.setItem(
      "theme",
      JSON.stringify(theme.title === "light" ? dark : light)
    );
  };

  useEffect(() => {
    const theme: DefaultTheme = JSON.parse(localStorage.getItem("theme"));

    if (theme) {
      setTheme(theme);
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export { toggleTheme };
