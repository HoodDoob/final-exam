import styles from "../styles/page.module.scss";

export default function Clips(props) {
  return (
    <div className={`${styles.gridSetup} ${styles.grid2}`}>
      <div className={styles.title}>
        <h1>clips</h1>
      </div>

      <button  onClick={() => props.changePage(5)}>back</button>

    </div>
  );
}
