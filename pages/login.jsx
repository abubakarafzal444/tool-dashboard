import React, { useContext, useEffect, useState } from "react";
import styles from "../styles/login.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { AuthContext } from "../context/auth-context";
import { useRouter } from "next/router";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const AuthCTX = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) router.push("/");
    });
  }, []);

  const loginHandler = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userData = await signInWithEmailAndPassword(auth, email, password);
      console.log(userData.user.uid);
      AuthCTX.setToken(userData.user.uid);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className={styles.mainDisplay}>
      <Header />
      <div className={styles.loginWrapper}>
        <h1 className={styles.loginHeading} onClick={() => console.log(AuthCTX.token)}>Login</h1>
        <div className={styles.username}>
          <label>Username</label>
          <input
            type="email"
            className={styles.loginInput}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <div className={styles.username}>
          <label>Passward </label>
          <input
            type="password"
            className={styles.loginInput}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        <div>
          <button className={styles.LoginBtn} onClick={loginHandler}><b>Login</b></button>
          <span className={styles.forgetPass}><a src="#123">forgot pasward?</a> </span>
        </div>

      </div>
      <div>
        Not Registered yet? <span className={styles.forgetPass}><a>Signup here</a></span>
      </div>
      <Footer />
    </div>

  );
};

export default Login;
