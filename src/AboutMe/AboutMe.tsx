import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { motion, MotionConfig, type Variants } from "framer-motion";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import aboutMeConfig from "./aboutMeConfig.tsx";
import photo from "../assets/photo.jpg";
import { themeSettings } from "../theme/theme.ts";

const portraitVariants: Variants = {
  hidden: { opacity: 0, x: -18, scale: 0.985 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const copyVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", delay: 0.08 },
  },
};

function AboutMe() {
  return (
    <MotionConfig reducedMotion="user">
      <Container
        id="about-me"
        component="section"
        maxWidth={themeSettings.contentWidth}
        sx={{ my: { xs: 6, md: 10 }, scrollMarginTop: themeSettings.appbarHeight * 20 }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "minmax(220px, 0.85fr) minmax(0, 1.15fr)" },
            columnGap: { md: 8 },
            rowGap: { xs: 4, md: 0 },
            alignItems: "center",
          }}
        >
          <Box
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={portraitVariants}
            sx={{
              width: { xs: "min(100%, 280px)", md: "100%" },
              maxWidth: 320,
              justifySelf: { xs: "center", md: "start" },
              aspectRatio: "4 / 5",
              overflow: "hidden",
              borderRadius: 1,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "background.paper",
            }}
          >
            <Box
              component="img"
              src={photo}
              alt="Yuncong Yu"
              sx={{
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 30%",
              }}
            />
          </Box>
          <Stack
            component={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={copyVariants}
            spacing={3}
            sx={{ maxWidth: 620, textAlign: "left" }}
          >
            <Typography variant="h4">About Me</Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              {aboutMeConfig.overview}
            </Typography>
            <Button
              component="a"
              href="/cv_yuncong_yu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<PictureAsPdfOutlinedIcon />}
              sx={{ alignSelf: "flex-start" }}
            >
              View CV
            </Button>
          </Stack>
        </Box>
      </Container>
    </MotionConfig>
  );
}

export default AboutMe;
