import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { palette, themeSettings } from "../theme/theme.ts";
import navigationConfig from "./navigationConfig.ts";
import YuncongsLogo from "../assets/icons/yuncong-logo.svg?react";

const labelToHref = (label: string) => label.replace(" ", "-").toLowerCase();

function Navigation() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [section, setSection] = useState<string>(
    labelToHref(navigationConfig.labels[0]),
  );
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openMenu = Boolean(anchorEl);

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
      { rootMargin: "-30% 0px -70% 0px" },
    );

    navigationConfig.labels.forEach((label) => {
      const el = document.getElementById(labelToHref(label));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <AppBar component="nav" position="sticky" sx={{}}>
      <Toolbar
        disableGutters
        sx={{
          minHeight: `${themeSettings.appbarHeight}vh`,
          px: 3,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="a"
          href="#top"
          sx={{
            width: { xs: 24, md: 28 },
            height: { xs: 24, md: 28 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: palette.blueGrey100,
            "&:hover": { color: "primary.main" },
          }}
        >
          <YuncongsLogo width="100%" height="100%" />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {isMobile ? (
          <>
            <IconButton
              edge="end"
              aria-label="menu"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={openMenu}
              onClose={() => setAnchorEl(null)}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
            >
              {navigationConfig.labels.map((label) => (
                <MenuItem
                  key={label}
                  component="a"
                  href={`#${labelToHref(label)}`}
                  onClick={() => setAnchorEl(null)}
                >
                  {label}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Tabs value={section} onChange={handleChange}>
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
