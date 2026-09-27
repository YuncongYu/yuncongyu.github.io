import type { ReactElement } from "react";
import MapIcon from "@mui/icons-material/Map";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link } from "@mui/material";

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
      content: "Junkersring 10, 76344 Eggenstein-Leopoldshafen, Germany",
    },
    {
      icon: <EmailIcon fontSize="large" />,
      title: "Email",
      content: (
        <Link href="mailto:yuncong.yu@gmx.de">yuncong.yu@gmx.de</Link>
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
