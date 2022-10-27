import styles from "../styles/detailList.module.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import LinksBar from "../components/linksbar/LinksBar";


const detailList = () => {
  return (
    <div className={styles.detailDiv}>
      <Header />
      <div className={styles.detailMainContainer}>
        <Navbar />
        <LinksBar />
        <h1 className={styles.headingMember}>Your Membership Information </h1>
        <div className={styles.notification}><i>
          <span className={styles.Important}>Important:</span> November 4,2022. We have an extension
          update, so please <a className={styles.extension}>download latest extension</a> to access our Tools.</i>
        </div>
        <div className={styles.gridContainer}>
          <div>
            <div className={styles.subscriptionHeading}>Active Subscriptions </div>
            <div className={styles.subscriptionContent}>
              <p>All In One Pack - <span className={styles.subscriptionSpan}>expires 04/26/2023</span></p>
              <p>Free signup - <span className={styles.subscriptionSpan}>Lifetime</span></p></div>
          </div>
          <div className={styles.adjustSize}>
            <div className={styles.subscriptionHeading}>Useful Links </div>
            <div className={styles.linksContent}>
              <a>Logout</a>
              <a>Change Passward</a>
              <a>Payments History</a>
            </div>
          </div>
          <div>
            <div className={styles.subscriptionHeading}>Active Resources </div>
          </div>
          <div className={styles.ImportantPoints}>
            <div className={styles.subscriptionHeading}>Important Notes </div>
            <div className={styles.importantContent}>
              <p>Point 1 ...</p>
              <p>Point 2 ...</p>
              <p>Point 3 ...</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default detailList;