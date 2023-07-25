import { styled, Box } from "@mui/material";
import { Link } from "react-router-dom";

export const NavbarContainer = styled(Box)(() => ({
  height: "80px",
  width: "100%",
  backgroundColor: "black",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
}));

export const NavbarLinksContainer = styled(Box)(() => ({
  height: "35px",
  width: "100px",
  //   backgroundColor: "white",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
}));

export const NavbarLinks = styled(Link)(() => ({
  textDecoration: "none",
  color: "white",
}));

export const LoginPage = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));
