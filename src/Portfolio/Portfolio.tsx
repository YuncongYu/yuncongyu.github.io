import { motion, type Variants } from "framer-motion";
import { Box, Card, CardMedia, Container, Typography } from "@mui/material";
import { themeSettings } from "../theme/theme.ts";
import portfolioConfig from "./portfolioConfig.ts";

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function Portfolio() {
  return (
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
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          gap: 3,
        }}
      >
        {portfolioConfig.items.map((item) => (
          <motion.div key={item.title} variants={itemVariants}>
            <Card sx={{ overflow: "hidden", height: "100%" }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  // aspectRatio: "16 / 9",
                  // objectFit: "cover",
                  transition: "transform 0.3s ease",
                  "&:hover": { transform: "scale(1.03)" },
                }}
              />
              <Typography variant="h6" sx={{ p: 2, textAlign: "middle" }}>
                {item.title}
              </Typography>
            </Card>
          </motion.div>
        ))}
      </Box>
    </Container>
  );
}

export default Portfolio;