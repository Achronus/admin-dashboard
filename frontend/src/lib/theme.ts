import { dark, defaultFontFamily, light } from "@/constants/theme";
import { ThemeMode } from "@/types/core";
import { ThemeOptions } from "@mui/material/styles";

// Design Tokens
export const tokens = (mode: ThemeMode) => ({
  ...(mode === "dark" ? dark : light),
});

// MUI Theme Settings
export const themeSettings = (mode: ThemeMode): ThemeOptions => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: colors.primary[500],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.gray[700],
              main: colors.gray[500],
              light: colors.gray[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: defaultFontFamily,
      fontSize: 12,
      h1: {
        fontFamily: defaultFontFamily,
        fontSize: 40,
      },
      h2: {
        fontFamily: defaultFontFamily,
        fontSize: 32,
      },
      h3: {
        fontFamily: defaultFontFamily,
        fontSize: 24,
      },
      h4: {
        fontFamily: defaultFontFamily,
        fontSize: 20,
      },
      h5: {
        fontFamily: defaultFontFamily,
        fontSize: 16,
      },
      h6: {
        fontFamily: defaultFontFamily,
        fontSize: 14,
      },
    },
  };
};
