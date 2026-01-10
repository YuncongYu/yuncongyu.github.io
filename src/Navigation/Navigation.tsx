import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { useState } from "react";
import { themeSettings } from "../theme/theme.ts";

export function Navigation() {
  const [section, setSection] = useState<string>("Hero");

  const handleChange = (_event: React.SyntheticEvent, newSection: string) => {
    setSection(newSection);
  };

  return (
    <AppBar
      position="static"
      sx={{
        height: `${100 - themeSettings.appbarHeight}vh`,
        alignItems: "flex-end",
        justifyContent: "center",
        pr: 2,
      }}
    >
      <Toolbar disableGutters>
        <Tabs
          value={section}
          onChange={handleChange}
          aria-label="Appbar for navigation"
          sx={{ mt: 0 }}
        >
          <Tab label="Hero" />
          <Tab label="About Me" />
          <Tab label="Portfolio" />
          <Tab label="Publications" />
          <Tab label="Contact" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}
