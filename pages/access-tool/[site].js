import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import LinksBar from "../../components/linksbar/LinksBar";
import Navbar from "../../components/navbar/Navbar";
import { auth } from "../../config/firebase";
import styles from "../../styles/clickMe.module.css";

export default function Home() {
  const [cookies, setCookies] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fetchCookies = async (uid) => {
    if (!cookies) {
      try {
        const result = await axios.post("api/cookies", {
          siteName: "canva",
          userId: uid,
        });
        console.log("re", result);
        if (result.data.status === 401) {
          const err = new Error(
            "You need to login again to access this resource"
          );
          err.status = 401;
          throw err;
        }
        setCookies(result.data.obj);
        setLoading(false);
      } catch (e) {
        console.log(e);
        await auth.signOut();
        router.push("/login");
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    //   if (!user) {
    //     setCookies("");
    //     // router.push("/login");
    //   } else {
        fetchCookies(user.uid);
    //   }
    // });
  }, []);

  if (loading) return <div>loading...</div>;
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.mainContent}>
        <Navbar />
        <LinksBar />
        <div className={styles.clickBtnDiv}>
          <p>Some content</p>
          <button
            className={styles.clickBtn}
            onClick={() => navigator.clipboard.writeText(cookies)}
          >
            First Click On Me
          </button>
          <p className={styles.primaryPara}>then, Second Click on extension</p>
        </div>
        <div className={styles.chatSupportDiv}>
          <i>
            Above tools not working? Inform it to{" "}
            <span className={styles.chatSupportLink}>Live chat support</span>{" "}
            for a Quick Fix.
          </i>
        </div>
      </div>
      <Footer />
    </div>
  );
}
