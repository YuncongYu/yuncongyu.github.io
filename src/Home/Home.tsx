import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { themeSettings } from "../theme/theme.ts";
import homeConfig from "./home-config.ts";

// import teaser from "../assets/background/bg.png";

function Home() {
  return (
    <>
      <Box
        id="home"
        component="section"
        sx={{
          // position: "relative",
          height: `${100 - themeSettings.appbarHeight - homeConfig.arrowHeight}vh`,
          // minHeight: { xs: "60vh", md: "70vh" },
          display: "flex",
          alignItems: "center",
          // color: "black",
          // backgroundImage: `url(${teaser})`,
          // backgroundSize: "cover",
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
        }}
      >
        {/*<Box*/}
        {/*  sx={{*/}
        {/*    position: "absolute",*/}
        {/*    inset: 0,*/}
        {/*    // Uncomment when background image provided*/}
        {/*    // backgroundColor: "rgba(0, 0, 0, 0.15)",*/}
        {/*  }}*/}
        {/*/>*/}
        <Container
          maxWidth={false}
          disableGutters
          sx={{ position: "relative", zIndex: 1 }}
        >
          <Stack spacing={3}>
            <Typography
              variant="h1"
              component="h1"
              color="primary"
              // fontWeight={600}
            >
              {homeConfig.name}
            </Typography>
            <Typography variant="h5" component="p" color="secondary">
              {homeConfig.portfolio.join("\u00A0\u00A0|\u00A0\u00A0")}
            </Typography>
          </Stack>
        </Container>
      </Box>
      <IconButton
        onClick={() => {
          document.getElementById("about-me")?.scrollIntoView();
        }}
        aria-label="Scroll down"
        sx={{
          positon: "absolute",
          height: `${homeConfig.arrowHeight}vh`,
          // bottom: "-48%",
          // left: "-50%",
          color: "primary.main",
          "&:hover": {
            color: "secondary.main",
          },
          "@keyframes bounce": {
            "0%, 20%, 50%, 80%, 100%": {
              transform: "translateY(0)",
            },
            "40%": {
              transform: "translateY(8px)",
            },
            "60%": {
              transform: "translateY(4px)",
            },
          },
          animation: "bounce 2s infinite",
        }}
      >
        <KeyboardArrowDownIcon fontSize="large" />
      </IconButton>
    </>
  );
}

export default Home;
