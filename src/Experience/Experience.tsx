import { motion, MotionConfig, type Variants } from "framer-motion";
import { Box, Container, Stack, Typography } from "@mui/material";
import { themeSettings } from "../theme/theme.ts";
import experienceConfig from "./experienceConfig.ts";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: "easeOut" },
  },
};

const timelineVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.08, staggerChildren: 0.18 },
  },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.95, ease: "easeOut" },
  },
};

const markerVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 360, damping: 22 },
  },
};

function Experience() {
  return (
    <MotionConfig reducedMotion="user">
      <Container
        component="section"
        id="experience"
        maxWidth={themeSettings.contentWidth}
        sx={{ my: 2, scrollMarginTop: themeSettings.appbarHeight * 20 }}
      >
        <Box sx={{ mt: 15, mb: 5 }}>
          <Typography variant="h4">Experience</Typography>
        </Box>
        <Stack
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={timelineVariants}
          spacing={0}
          sx={{ position: "relative", gap: 4 }}
        >
          <Box
            component={motion.span}
            aria-hidden="true"
            variants={lineVariants}
            sx={{
              position: "absolute",
              top: { xs: 28, sm: 6 },
              bottom: 5,
              left: { xs: 8, sm: 169 },
              width: 2,
              bgcolor: "primary.main",
              transformOrigin: "top center",
            }}
          />
          {experienceConfig.items.map((item) => (
            <Box
              component={motion.article}
              key={`${item.organization}-${item.period}`}
              variants={itemVariants}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "18px minmax(0, 1fr)", sm: "140px 28px minmax(0, 1fr)" },
                columnGap: { xs: 1.5, sm: 2 },
                rowGap: { xs: 0.5, sm: 0 },
                textAlign: "left",
                position: "relative",
                zIndex: 1,
              }}
            >
              <Typography
                variant="subtitle2"
                color="text.secondary"
                sx={{
                  gridColumn: { xs: "1 / -1", sm: "1" },
                  gridRow: { sm: "1" },
                  pl: { xs: 3.75, sm: 0 },
                  pt: { sm: 0.25 },
                }}
              >
                {item.period}
              </Typography>
              <Box
                component={motion.div}
                aria-hidden="true"
                variants={markerVariants}
                sx={{
                  gridColumn: { xs: "1", sm: "2" },
                  gridRow: { xs: "2 / span 2", sm: "1" },
                  position: "relative",
                  transformOrigin: "50% 11px",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 5,
                    left: "50%",
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    border: "2px solid",
                    borderColor: "background.default",
                    transform: "translateX(-50%)",
                  },
                }}
              />
              <Stack
                spacing={1}
                sx={{ gridColumn: { xs: "2", sm: "3" }, gridRow: { sm: "1" }, pb: 1 }}
              >
                <Box>
                  <Typography variant="h5">{item.role}</Typography>
                  <Typography variant="h6" color="primary.main">
                    {item.organization}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.context}
                  </Typography>
                </Box>
                <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                  {item.highlights.map((highlight) => (
                    <Typography component="li" key={highlight} sx={{ mb: 0.5 }}>
                      {highlight}
                    </Typography>
                  ))}
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Container>
    </MotionConfig>
  );
}

export default Experience;