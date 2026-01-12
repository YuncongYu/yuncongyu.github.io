import { type Breakpoint, createTheme } from "@mui/material";
// import "@fontsource/open-sans/600.css";
// import "@fontsource-variable/montserrat"; // Defaults to wght axis
import { blueGrey } from "@mui/material/colors";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/lato";

export const palette = {
  // b0: "#769FCD",
  // b1: "#B9D7EA",
  // b2: "#D6E6F2",
  // b3: "#F7FBFC",
  // c0: "#71C9CE",
  // c1: "#A6E3E9",
  // c2: "#CBF1F5",
  // c3: "#E3FDFD",
  b0: "#1B262C",
  b1: "#0F4C75",
  b2: "#3282B8",
  b3: "#BBE1FA",
  pale_green: "#94A378",
  pale_yellow: "#E5BA41",
  pale_red: "#D1855c",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   main: lightBlue[200],
    //   dark: lightBlue[400],
    //   contrastText: lightBlue[400],
    // },
    // secondary: {
    //   main: palette.pale_green,
    // },
    // background: {
    //   default: palette.b0,
    // }
    text: {
      primary: blueGrey[100],
    }
  },
  typography: {
    // h1: { fontFamily: '"Josefin Sans"' },
    // h5: { fontFamily: '"Lato"' },
    body1: { fontSize: 18 },
    button: {
      fontSize: "18px",
      textTransform: "none",
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover": {
            color: theme.palette.primary.main,
          },
        }),
      },
    },
  },
});

interface ThemeSettings {
  appbarHeight: number;
  contentWidth: Breakpoint;
}

export const themeSettings: ThemeSettings = {
  appbarHeight: 5, // [vh]
  contentWidth: "md",
};

export default theme;
