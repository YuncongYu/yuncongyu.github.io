import {
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

function Publications() {
  return (
    <Container
      component="section"
      id="publications"
      maxWidth={themeSettings.contentWidth}
      sx={{ my: 2 }}
    >
      <Typography variant="h4" sx={{ mt: 12, mb: 5 }}>
        Publications
      </Typography>
      {publicationsConfig.publications.map((pub) => (
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
              <LinkIcon color="primary" />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Container>
  );
}

export default Publications;
