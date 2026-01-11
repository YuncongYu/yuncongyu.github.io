import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { useEffect, useState } from "react";
import { themeSettings } from "../theme/theme.ts";
import navigationConfig from "./navigationConfig.ts";

function Navigation() {
  const labelToHref = (label: string) => label.replace(" ", "-").toLowerCase();

  const [section, setSection] = useState<string>(
    labelToHref(navigationConfig.labels[0]),
  );

  const handleChange = (_event: React.SyntheticEvent, newSection: string) => {
    setSection(newSection);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    navigationConfig.labels.forEach(label => {
      const el = document.getElementById(labelToHref(label));
      if (el) observer.observe(el);
    })

    return () => observer.disconnect();
  }, []);

  return (
    <AppBar
      position="sticky"
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
              component="a"
              href={`#${labelToHref(label)}`}
              label={label}
              value={labelToHref(label)}
              key={label.toLowerCase()}
            />
          ))}
        </Tabs>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
