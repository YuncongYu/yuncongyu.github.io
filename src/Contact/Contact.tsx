import { Box, Card, CardHeader, Paper, Stack, Typography } from "@mui/material";
import contactConfig from "./contactConfig.tsx";

function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        mt: 10,
        width: "100%",
        height: 200,
      }}
    >
      <Paper
        elevation={1}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          direction="row"
          spacing={10}
          alignItems="center"
          justifyContent="center"
        >
          {contactConfig.contactItems.map((item) => (
            <Card
              key={item.title}
              sx={{ display: "flex", alignItems: "center" }}
            >
              {item.icon}
              <CardHeader
                title={
                  <Typography variant="h5" textAlign="left">
                    {item.title}
                  </Typography>
                }
                subheader={item.content}
              />
            </Card>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}

export default Contact;
