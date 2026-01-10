import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { useState } from "react";
import { themeSettings } from "../theme/theme.ts";
import navigationConfig from "./navigationConfig.ts";

function Navigation() {
  const [section, setSection] = useState<string>(
    navigationConfig.labels[0].replace(" ", "-").toLowerCase(),
  );

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
          {navigationConfig.labels.map((label) => (
            <Tab
              label={label}
              value={label.replace(" ", "-").toLowerCase()}
              key={label.toLowerCase()}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
