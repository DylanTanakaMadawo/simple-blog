import React from "react";
import { LoginPage, TypographyD } from "../../styles";
import { Button } from "@mui/material";

import { auth, provider } from "../../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

export const LogIn = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <LoginPage>
      <TypographyD variant="h4" sx={{ marginBottom: "40px" }}>
        Sign In With Google to Continue
      </TypographyD>
      <Button variant="contained" onClick={signInWithGoogle}>
        Sign In with Google
      </Button>
    </LoginPage>
  );
};
