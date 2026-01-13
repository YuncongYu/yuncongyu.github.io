import { Box, CardHeader, Paper, Stack, Typography } from "@mui/material";
import contactConfig from "./contactConfig.tsx";

function Contact() {
  return (
    <Box
      id="contact"
      component="section"
      sx={{
        mt: { xs: 6, md: 10 },
        width: "100%",
      }}
    >
      <Paper
        elevation={1}
        sx={{
          width: "100%",
          py: { xs: 4, md: 6 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 1, md: 8 }}
          // alignItems="center"
          justifyContent="center"
          px={2}
        >
          {contactConfig.contactItems.map((item) => (
            <Box
              key={item.title}
              sx={{ display: "flex", alignItems: "center" }}
            >
              {item.icon}
              <CardHeader
                title={
                  <Typography variant="h6" textAlign="left">
                    {item.title}
                  </Typography>
                }
                subheader={item.content}
                sx={{ textAlign: "left" }}
              />
            </Box>
          ))}
        </Stack>
      </Paper>
    </Box>
  );
}

export default Contact;
