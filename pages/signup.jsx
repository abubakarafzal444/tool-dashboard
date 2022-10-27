import React, { useState } from "react";
import styles from "../styles/signup.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setName] = useState("")

  const submitHandler = async () => {
    try {
      const result = await axios.post('api/signup', { displayName, email, password });
      console.log(result.data)
    } catch (e) { }
  };
  return (
    <div className={styles.mainSignupDiv}>
      <Header />
      <div className={styles.signupWrapper}>
        <h1>Signup Here</h1>
        <div className={styles.userFields}>
          <label>User Name </label>
          <input
            type="name"
            value={displayName}
            className={styles.signupInput}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
        </div>
        <div className={styles.userFields}>
          <label>Email </label>
          <input
            type="email"
            value={email}
            className={styles.signupInput}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
          />
        </div>
        <div className={styles.userFields}>
          <label>Passward </label>
          <input
            type="password"
            value={password}
            className={styles.signupInput}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>

        <button
          className={styles.signupBtn} onClick={submitHandler}>signup</button>
      </div>
      <Footer />
    </div>

  );
};

export default Signup;
