import styles from "./linksBar.module.css";

const LinksBar = () => {
  return (
    <div className={styles.linksBar}>
      <img src="#123" />
      <a className={styles.links}>How To Access Our Tools? </a>
      <a className={styles.links}>Signup Form</a>
      <a className={styles.links}>Customer Profile</a>
    </div>
  )
}
export default LinksBar