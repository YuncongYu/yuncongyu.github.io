import { Box, Container, Stack, Typography } from "@mui/material";
import teaser from "../assets/background/bg.png";

function Hero() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: { xs: "60vh", md: "70vh" },
        display: "flex",
        alignItems: "center",
        // color: "black",
        backgroundImage: `url(${teaser})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.15)",
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
            fontWeight={700}
          >
            Yuncong Yu
          </Typography>
          <Typography variant="h4" component="p" color="secondary">
            Data Scientist with Engineering Background
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Hero;
