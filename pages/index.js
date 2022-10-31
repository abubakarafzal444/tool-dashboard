import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { auth } from "../config/firebase";
import { AuthContext } from "../context/auth-context";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [cookies, setCookies] = useState("");
  const [loading, setLoading] = useState(false);
  const AuthCTX = useContext(AuthContext);
  const router = useRouter();

  const fetchCookies = async (uid) => {
    if (!cookies) {
      try {
        const result = await axios.post("api/cookies", {
          siteName: "canva",
          userId: uid,
        });
        setCookies(result.data.obj);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setCookies("");
        router.push("/login");
      } else {
        fetchCookies(user.uid);
      }
    });
  }, []);

  if (loading) return <div>loading...</div>;
  return (
    <div className={styles.container}>
      <Navbar />
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <button
          style={{ padding: "20px 40px" }}
          onClick={() => {
            navigator.clipboard.writeText(cookies);
          }}
        >
          CLICK ME FIRST
        </button>
      </div>
    </div>
  );
}
