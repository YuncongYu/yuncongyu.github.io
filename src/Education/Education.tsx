import { motion, MotionConfig, type Variants } from "framer-motion";
import { Box, Container, Stack, Typography } from "@mui/material";
import { themeSettings } from "../theme/theme.ts";
import educationConfig from "./educationConfig.ts";

const listVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.08, staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function Education() {
  return (
    <MotionConfig reducedMotion="user">
      <Container
        component="section"
        id="education"
        maxWidth={themeSettings.contentWidth}
        sx={{ my: 2, scrollMarginTop: themeSettings.appbarHeight * 20 }}
      >
        <Box sx={{ mt: 15, mb: 5 }}>
          <Typography variant="h4">Education</Typography>
        </Box>
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariants}
        >
          {educationConfig.items.map((item) => (
            <Box
              component={motion.article}
              key={item.degree}
              variants={itemVariants}
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "88px minmax(0, 1fr)", sm: "144px minmax(0, 1fr)" },
                columnGap: { xs: 2, sm: 3 },
                rowGap: { xs: 0.5, sm: 0 },
                alignItems: "stretch",
                py: { xs: 2.5, sm: 3 },
                borderBottom: "1px solid",
                borderColor: "divider",
                "&:last-of-type": { borderBottom: 0 },
                textAlign: "left",
              }}
            >
              <Box
                sx={{
                  width: { xs: 80, sm: 132 },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  src={item.logo}
                  alt=""
                  aria-hidden="true"
                  sx={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "minmax(0, 1fr)", sm: "minmax(0, 1fr) auto" },
                  alignItems: "center",
                  columnGap: 3,
                }}
              >
                <Stack spacing={0.25}>
                  <Typography variant="h5">{item.degree}</Typography>
                  <Typography variant="h6" color="primary.main">
                    {item.institution}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.location}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ display: { xs: "block", sm: "none" }, pt: 0.5 }}
                  >
                    {item.period}
                  </Typography>
                </Stack>
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{ display: { xs: "none", sm: "block" }, textAlign: "right" }}
                >
                  {item.period}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </MotionConfig>
  );
}

export default Education;