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
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) router.push("/");
    });
  }, []);

  const loginHandler = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userData = await signInWithEmailAndPassword(auth, email, password);
      console.log("result", userData);
      const result = await axios.post("api/login", {
        userId: userData.user.uid,
      });
    } catch (e) {
      if (e.code == "auth/user-disabled") {
        alert(
          "Your account is under preview. Please wait for it to be active and login later. Thanks!"
        );
      }
    }
  };
  // const submitHandler = async () => {
  //   try {
  //     const result = await axios.post('api/signup', { displayName, email, password });
  //     console.log(result.data)
  //   } catch (e) { }
  // };
  return (
    <div className={styles.mainDisplay}>
      <Header />
      <div className={styles.loginWrapper}>
        <h1 className={styles.loginHeading}>Login</h1>
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
          <button className={styles.LoginBtn} onClick={loginHandler}>
            <b>Login</b>
          </button>
          <span className={styles.forgetPass}>
            <a src="#123">forgot pasward?</a>{" "}
          </span>
        </div>
      </div>
      <div>
        Not Registered yet?{" "}
        <span className={styles.forgetPass}>
          <Link href="/signup">Signup here</Link>
        </span>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
