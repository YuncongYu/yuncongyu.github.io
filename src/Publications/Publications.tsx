import { motion, type Variants } from "framer-motion";
import { Box, Container, IconButton, Stack, Typography } from "@mui/material";
import publicationsConfig from "./publicationsConfig.tsx";
import { themeSettings } from "../theme/theme.ts";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.06, staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
};

function Publications() {
  return (
    <Container
      component="section"
      id="publications"
      maxWidth={themeSettings.contentWidth}
      sx={{ my: 2, scrollMarginTop: themeSettings.appbarHeight * 20 }}
    >
      <Box sx={{ mt: 15, mb: 5 }}>
        <Typography variant="h4">Publications</Typography>
      </Box>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        style={{ borderTop: "1px solid rgba(255, 255, 255, 0.16)" }}
      >
        {publicationsConfig.publications.map((pub) => (
          <Box
            component={motion.article}
            key={pub.title}
            variants={cardVariants}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "minmax(0, 1fr) 44px", sm: "104px minmax(0, 1fr) 48px" },
              columnGap: { xs: 1, sm: 3 },
              rowGap: { xs: 1, sm: 0 },
              alignItems: "center",
              py: { xs: 2.5, sm: 3 },
              borderBottom: "1px solid",
              borderColor: "divider",
              transition: "background-color 0.2s ease",
              "&:hover": { bgcolor: "action.hover" },
            }}
          >
            <Typography
              variant="subtitle2"
              // color="primary.main"
              sx={{
                gridColumn: { xs: "1 / -1", sm: "1" },
                gridRow: { xs: "1", sm: "1" },
                pl: { xs: 0, sm: 1 },
                whiteSpace: "nowrap",
              }}
            >
              {pub.time}
            </Typography>
            <Stack
              spacing={0.75}
              sx={{
                gridColumn: { xs: "1", sm: "2" },
                gridRow: { xs: "2", sm: "1" },
                textAlign: "left",
                minWidth: 0,
              }}
            >
              <Typography variant="h5" sx={{ lineHeight: 1.25 }}>
                {pub.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {pub.venue}
              </Typography>
              {pub.content && (
                <Typography component="div" variant="body2" color="primary">
                  {pub.content}
                </Typography>
              )}
            </Stack>
            <IconButton
              component="a"
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open publication: ${pub.title}`}
              sx={{
                gridColumn: { xs: "2", sm: "3" },
                gridRow: { xs: "2", sm: "1" },
                justifySelf: "end",
              }}
            >
              <OpenInNewIcon color="primary" />
            </IconButton>
          </Box>
        ))}
      </motion.div>
    </Container>
  );
}

export default Publications;
