import styles from "../styles/page.module.scss";

export default function SillyStuff(props) {
  return (
    <div className={`${styles.gridSetup} ${styles.gridVideos}`}>
      <div className={styles.title}>
        <h1>silly stuff</h1>
        <button  onClick={() => props.changePage(5)}>back</button>

      </div>

    </div>
  );
}