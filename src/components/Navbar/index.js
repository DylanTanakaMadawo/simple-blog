import React from "react";
import {
  NavbarContainer,
  NavbarLinks,
  NavbarLinksContainer,
} from "../../styles";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../../firebase-config";

export const Navbar = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();
  const logOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };
  return (
    <NavbarContainer>
      <NavbarLinksContainer>
        <NavbarLinks to="/">Home</NavbarLinks>
      </NavbarLinksContainer>

      {!isAuth ? (
        <NavbarLinksContainer>
          <NavbarLinks to="/login">LogIn</NavbarLinks>
        </NavbarLinksContainer>
      ) : (
        <>
          <NavbarLinksContainer>
            <NavbarLinks to="/createpost">Create Post</NavbarLinks>
          </NavbarLinksContainer>
          <NavbarLinks>
            <Button onClick={logOut} variant="text" sx={{ color: "white" }}>
              Log Out
            </Button>
          </NavbarLinks>
        </>
      )}
    </NavbarContainer>
  );
};
