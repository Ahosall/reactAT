import * as React from "react";

import {
  AppBar,
  Box,
  Divider,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";

import { AccountCircle } from "@mui/icons-material";

import { IUserResponse } from "../utils/types";
import { useAuth } from "../contexts/auth";

interface IWork {
  logged: boolean;
  user: IUserResponse | null;
}

const Header = ({ logged, user }: IWork) => {
  const { Logout } = useAuth();

  const pages = ["Products", "Pricing", "Blog"];
  const settings = [
    {
      page: "Perfil",
      location: () => (window.location.href = "/profile"),
    },
    {
      page: "Discord",
      location: () => (window.location.href = "/discord"),
    },
    {
      page: "Amigos",
      location: () => (window.location.href = "/discord"),
    },
    {
      divider: true,
    },
    {
      page: "Sair",
      location: () => Logout(),
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handlers = {
    signIn: () => {
      window.location.href = `/login`;
    },
    openMenu: (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    },
    closeMenu: () => {
      setAnchorEl(null);
    },
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "roboto",
              fontWeight: 500,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Nait Scans
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "roboto",
              fontWeight: 500,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Nait Scans
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handlers.openMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={handlers.closeMenu}
            >
              {user ? (
                <>
                  {settings.map((setting, i) =>
                    setting.divider == undefined ? (
                      <MenuItem onClick={setting.location}>
                        {setting.page}
                      </MenuItem>
                    ) : (
                      <Divider />
                    )
                  )}
                </>
              ) : (
                <>
                  <MenuItem onClick={handlers.signIn}>Entrar</MenuItem>
                </>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
