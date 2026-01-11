import { motion, type Variants } from "framer-motion";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import publicationsConfig from "./publicationsConfig.tsx";
import { themeSettings } from "../theme/theme.ts";
import LinkIcon from "@mui/icons-material/Link";

// Container controls staggered animation for all cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between each card
    },
  },
};

// Card animation: slide up, fade in, scale slightly
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Publications() {
  return (
    <Container
      component="section"
      id="publications"
      maxWidth={themeSettings.contentWidth}
      sx={{ my: 2 }}
    >
      <Box sx={{ mt: 15, mb: 5 }}>
        <Typography variant="h4">Publications</Typography>
        <Typography variant="subtitle1">
          (Sorted in descending order of the publication year)
        </Typography>
      </Box>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" // Animate when the section scrolls into view
        viewport={{ once: true, amount: 0.2 }} // triggers when 20% visible
      >
        {publicationsConfig.publications.map((pub) => (
          <motion.div key={pub.title} variants={cardVariants}>
            <Card
              sx={{
                my: 2,
                display: "flex",
                position: "relative",
                textAlign: "left",
                pl: 2,
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  width: 6,
                  backgroundColor: "primary.main",
                },
              }}
              key={pub.title}
            >
              <CardContent>
                <Stack spacing={0.5}>
                  <Typography variant="h5">{pub.title}</Typography>
                  <Typography variant="subtitle1">{pub.venue}</Typography>
                  {pub.content && <Typography>{pub.content}</Typography>}
                  <Typography variant="subtitle2">{pub.time}</Typography>
                </Stack>
              </CardContent>
              <CardActions sx={{ marginLeft: "auto" }}>
                <IconButton
                  component="a"
                  href={pub.link}
                  target="_blank"
                  rel={"noopener noreferrer"}
                >
                  <LinkIcon
                    color="primary"
                    sx={{
                      "&:hover": {
                        color: "secondary.main",
                      },
                    }}
                  />
                </IconButton>
              </CardActions>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

export default Publications;
