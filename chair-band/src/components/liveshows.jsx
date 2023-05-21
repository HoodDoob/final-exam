import styles from "../styles/page.module.scss";

export default function Liveshows(props) {
  return (
    <div className={`${styles.gridSetup} ${styles.grid2}`}>
      <div className={styles.title}>
        <h1>live shows</h1>
      </div>

      <button  onClick={() => props.changePage(5)}>back</button>

    </div>
  );
}