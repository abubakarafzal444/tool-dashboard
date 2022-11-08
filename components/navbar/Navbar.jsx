import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { auth } from "../../config/firebase";

const Navbar = () => {
  const router = useRouter();

  const logoutHandler = async () => {
    await auth.signOut();
    router.push("/login");
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      auth.signOut().then((res) => {
        router.push("/login");
      });
    }, 300000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login");
      }
    });
  }, []);
  return (
    <div style={{ display: "flex" }}>
      <h5>Logo here</h5>
      <button
        style={{
          backgroundColor: "#fff",
          color: "grey",
          border: "none",
          marginLeft: "15px",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={logoutHandler}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
