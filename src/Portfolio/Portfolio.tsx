import { motion, MotionConfig, type Variants } from "framer-motion";
import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import { themeSettings } from "../theme/theme.ts";
import portfolioConfig from "./portfolioConfig.ts";

const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.08, staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 1.045, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      opacity: { duration: 0.45, ease: "easeOut" },
      scale: { type: "spring", stiffness: 90, damping: 20 },
      filter: { duration: 0.55, ease: "easeOut" },
    },
  },
};

function Portfolio() {
  return (
    <MotionConfig reducedMotion="user">
      <Container
        component="section"
        id="portfolio"
        maxWidth={themeSettings.contentWidth}
        sx={{ my: 2, scrollMarginTop: themeSettings.appbarHeight * 20 }}
      >
        <Box sx={{ mt: 10, mb: 5 }}>
          <Typography variant="h4">Portfolio</Typography>
        </Box>
        <Box
          component={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={gridVariants}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 3,
          }}
        >
          {portfolioConfig.items.map((item) => (
            <motion.div key={item.title} variants={itemVariants}>
              <Card sx={{ overflow: "hidden", height: "100%", lineHeight: 0 }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    display: "block",
                    width: "100%",
                    transition: "transform 0.45s cubic-bezier(0.2, 0.8, 0.2, 1)",
                    "&:hover": { transform: "scale(1.025)" },
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </Box>
      </Container>
    </MotionConfig>
  );
}

export default Portfolio;