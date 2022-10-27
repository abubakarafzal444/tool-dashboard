import React, { useContext } from "react";
import { auth } from "../../config/firebase";
import { AuthContext } from "../../context/auth-context";

const Navbar = () => {
  const AuthCTX = useContext(AuthContext);

  const logoutHandler = async () => {
    await auth.signOut();
    AuthCTX.setToken("");
  };
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
          cursor: "pointer"
        }}

        onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Navbar;
