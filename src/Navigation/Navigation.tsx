import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { themeSettings } from "../theme/theme.ts";
import navigationConfig from "./navigationConfig.ts";

const labelToHref = (label: string) => label.replace(" ", "-").toLowerCase();

function Navigation() {
  const theme = useTheme();

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [section, setSection] = useState<string>(
    labelToHref(navigationConfig.labels[0]),
  );

  const handleChange = (_event: React.SyntheticEvent, newSection: string) => {
    setSection(newSection);
  };

  const drawer = (
    <List>
      {navigationConfig.labels.map((label) => (
        <ListItemButton
          component="a"
          href={`#${labelToHref(label)}`}
          onClick={() => setOpenMenu(false)}
          key={label}
        >
          <ListItemText primary={label} />
        </ListItemButton>
      ))}
    </List>
  );

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

    navigationConfig.labels.forEach((label) => {
      const el = document.getElementById(labelToHref(label));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        height: `${themeSettings.appbarHeight}vh`,
        alignItems: "flex-end",
        justifyContent: "center",
        pr: 2,
      }}
    >
      <Toolbar disableGutters>
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={() => setOpenMenu(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={openMenu}
              onClose={() => setOpenMenu(false)}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Tabs
            value={section}
            onChange={handleChange}
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
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
