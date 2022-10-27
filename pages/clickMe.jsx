import styles from "../styles/clickMe.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import LinksBar from "../components/linksbar/LinksBar";

const clickMe = () => {
  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.mainContent}>
        <Navbar />
        <LinksBar />
        <div className={styles.clickBtnDiv}>
          <p>Some content</p>
          <button className={styles.clickBtn}>First Click On Me</button>
          <p className={styles.primaryPara}>then, Second Click on extension</p>
        </div>
        <div className={styles.chatSupportDiv}>
          <i>
            Above tools not working? Inform it to <span className={styles.chatSupportLink}>Live chat support</span> for a Quick Fix.
          </i>
        </div>
      </div>
      <Footer />
    </div>

  )
}
export default clickMe;