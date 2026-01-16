import { type Breakpoint, createTheme } from "@mui/material";
// import "@fontsource/open-sans/600.css";
// import "@fontsource-variable/montserrat"; // Defaults to wght axis
import { blueGrey } from "@mui/material/colors";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/lato";

export const palette = {
  // From Color Hunt
  b0: "#1B262C",
  b1: "#0F4C75",
  b2: "#3282B8",
  b3: "#BBE1FA",
  // From Color Hunt
  pale_green: "#94A378",
  pale_yellow: "#E5BA41",
  pale_red: "#D1855c",
  // From Coolor: Refreshing Summer Fun
  skyBlue: "#8ECAE6",
  blueGreen: "#219EBC",
  deepSpaceBlue: "#023047",
  amberFlame: "#FFB703",
  tigerOrange: "#FB8500",
  // From Coolor: Pastel Dreamland Adventure: overly pale
  pinkOrchid: "#CDB4DB",
  pastelPetal: "#FFC8DD",
  blushPop: "#FFAFCC",
  icyBlue: "#BDE0FE",
  skyBluePDA: "#A2D2FF",
};

const theme = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   main: palette.skyBlue,
    //   dark: lightBlue[400],
    //   contrastText: lightBlue[400],
    // },
    // secondary: {
    //   main: palette.pinkOrchid,
    // },
    background: {
      // default: palette.deep_space_blue,
    },
    text: {
      primary: blueGrey[100],
    },
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
    MuiMenuItem: {
      styleOverrides: {
        root: ({ theme }) => ({
          ".MuiMenu-root &": {
            "&:hover": {
              color: theme.palette.primary.main,
            },
            "&:active": {
              color: theme.palette.primary.main,
            },
          },
        }),
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover": {
            color: theme.palette.secondary.main,
          },
        }),
      },
    },
    MuiLink: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&:hover": {
            color: theme.palette.secondary.main,
          },
        }),
      },
    },
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
