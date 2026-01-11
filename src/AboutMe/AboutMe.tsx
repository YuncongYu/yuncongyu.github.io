import {
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import aboutMeConfig from "./about-me-config.tsx";
import photo from "../assets/photo.jpg";
import { themeSettings } from "../theme/theme.ts";

function AboutMe() {
  return (
    <Container
      id="about-me"
      maxWidth={themeSettings.contentWidth}
      component="section"
      sx={{ my: 2 }}
    >
      {/*<Card sx={{ backgroundColor: "transparent", bowShadow: "none" }}>*/}
      <Stack
        direction="row"
        spacing={10}
        alignItems="center"
        justifyContent="center"
      >
        <CardContent>
          <Stack spacing={3}>
            <Typography variant="h4">About Me</Typography>
            <Typography variant="body1" sx={{ width: 600, textAlign: "left" }}>
              {aboutMeConfig.overview}
            </Typography>
          </Stack>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 250, height: "100%" }}
          image={photo}
          alt="Yuncong's Photo"
        />
      </Stack>
      {/*</Card>*/}
    </Container>
  );
}

export default AboutMe;
