import type { ReactElement } from "react";
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Typography } from "@mui/material";

interface ContactItem {
  icon: ReactElement;
  title: string;
  content: ReactElement | string;
}

interface ContactConfig {
  contactItems: ContactItem[];
}

const contactConfig: ContactConfig = {
  contactItems: [
    {
      icon: <MapIcon fontSize="large" />,
      title: "Address",
      content: "Rockwellstr. 12, 38518 Gifhorn, Germany",
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: "Email",
      content: (
        <Typography
          component="a"
          href="mailto:yuncong.yu@outlook.com"
          sx={{
            color: "primary.main",
            "&:hover": {
              color: "secondary.main",
              textDecoration: "underline",
            },
          }}
        >
          yuncong.yu@outlook.com
        </Typography>
      ),
    },
    {
      icon: <PhoneIcon fontSize="large" />,
      title: "Phone",
      content: "+49 172 5382447",
    },
  ],
};

export default contactConfig;
