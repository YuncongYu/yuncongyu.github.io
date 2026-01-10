import {
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import aboutMeConfig from "./about-me-config.tsx";

function AboutMe() {
  return (
    <Container maxWidth="md" component="section" sx={{ my: 2 }}>
      {/*<Card sx={{ backgroundColor: "transparent", bowShadow: "none" }}>*/}
      <Stack direction="row" spacing={10}>
        <CardContent>
          <Stack spacing={3}>
            <Typography variant="h4">About Me</Typography>
            <Typography variant="body1" sx={{ width: 500, textAlign: "left" }}>
              {aboutMeConfig.overview}
            </Typography>
          </Stack>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: 250, height: "100%" }}
          image="src/assets/photo.JPG"
          alt="Yuncong's Photo"
        />
      </Stack>
      {/*</Card>*/}
    </Container>
  );
}

export default AboutMe;
