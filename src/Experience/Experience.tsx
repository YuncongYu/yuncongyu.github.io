import { motion, type Variants } from "framer-motion";
import { Box, Container, Stack, Typography } from "@mui/material";
import { themeSettings } from "../theme/theme.ts";
import experienceConfig from "./experienceConfig.ts";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

function Experience() {
  return (
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
        spacing={4}
        sx={{
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: { xs: 28, sm: 6 },
            bottom: 5,
            left: { xs: 8, sm: 169 },
            borderLeft: "2px solid",
            borderColor: "primary.main",
          },
        }}
      >
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
              aria-hidden="true"
              sx={{
                gridColumn: { xs: "1", sm: "2" },
                gridRow: { xs: "2 / span 2", sm: "1" },
                position: "relative",
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
  );
}

export default Experience;