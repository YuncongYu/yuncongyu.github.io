import { Box, Container, Stack, Typography } from "@mui/material";
import { themeSettings } from "../theme/theme.ts";
import { heroConfig } from "./hero-config.ts";

// import teaser from "../assets/background/bg.png";

function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: `${themeSettings.appbarHeight}vh`,
        // minHeight: { xs: "60vh", md: "70vh" },
        display: "flex",
        alignItems: "center",
        // color: "black",
        // backgroundImage: `url(${teaser})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          // Uncomment when background image provided
          // backgroundColor: "rgba(0, 0, 0, 0.15)",
        }}
      />
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
            {heroConfig.name}
          </Typography>
          <Typography variant="h5" component="p" color="secondary">
            {heroConfig.portfolio.join("\u00A0\u00A0|\u00A0\u00A0")}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
