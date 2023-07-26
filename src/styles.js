import { styled, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NavbarContainer = styled(Box)(({ theme }) => ({
  height: "80px",
  width: "100%",
  backgroundColor: "black",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  fontFamily: "'Roboto', sans-serif",
  [theme.breakpoints.down("sm")]: {
    height: "70px",
    width: "100%",
  },
}));

export const NavbarLinksContainer = styled(Box)(() => ({
  height: "35px",
  width: "130px",
  //   backgroundColor: "white",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  fontFamily: "'Roboto', sans-serif",
}));

export const NavbarLinks = styled(Link)(() => ({
  textDecoration: "none",
  color: "white",
  fontFamily: "'Roboto', sans-serif",
}));

export const LoginPage = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "'Roboto', sans-serif",
  [theme.breakpoints.down("sm")]: {
    fontSize: "10px",
  },
}));

export const TypographyD = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    fontSize: "24px",
  },
}));
