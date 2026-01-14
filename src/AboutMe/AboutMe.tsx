import {
  CardContent,
  CardMedia,
  Container,
  Link,
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
      component="section"
      maxWidth={themeSettings.contentWidth}
      sx={{ my: { xs: 4, md: 8 }, scrollMarginTop: themeSettings.appbarHeight * 20 }}
    >
      {/*<Card sx={{ backgroundColor: "transparent", bowShadow: "none" }}>*/}
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={{ xs: 4, md: 8 }}
        alignItems="center"
        justifyContent="center"
      >
        <CardMedia
          component="img"
          image={photo}
          alt="Yuncong's Photo"
          sx={{
            width: { xs: 180, sm: 200, md: 250 },
            height: "auto",
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
        <CardContent sx={{ p: 0 }}>
          <Stack spacing={3}>
            <Typography variant="h4">About Me</Typography>
            <Typography
              variant="body1"
              sx={{
                maxWidth: 600,
                textAlign: "left",
                mx: { xs: "auto", md: "left" },
              }}
            >
              {aboutMeConfig.overview}
              {" "}
              <Link
                href="/cv_yuncong_yu.pdf"
                target="_blank"
                rel="noopener noreferer"
              >
               View my CV
              </Link>
            </Typography>
          </Stack>
        </CardContent>
      </Stack>
      {/*</Card>*/}
    </Container>
  );
}

export default AboutMe;
