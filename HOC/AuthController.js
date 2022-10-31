import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { auth } from "../config/firebase";
import { AuthContext } from "../context/auth-context";

const AuthController = (props) => {
  const authCTX = useContext(AuthContext);
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      authCTX.setUserId(user.uid);
    } else {
      authCTX.setUserId("");
    }
  });

  return props.children;
};

export default AuthController;
