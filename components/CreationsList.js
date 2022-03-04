import styles from "../styles/main.module.css";
export default function CreationsList() {
  return (
    <section className={styles.CreationsList}>
      <div className={styles.head}>
        <h3>Our creations</h3>
        <button>See all</button>
      </div>
      <div className={styles.grid}>
        <div className={styles.gridItem1}>
          <p>
            Deep <br /> earth
          </p>
        </div>
        <div className={styles.gridItem2}>
          <p>
            Night <br /> arcade
          </p>
        </div>
        <div className={styles.gridItem3}>
          <p>
            Soccer <br /> team VR
          </p>
        </div>
        <div className={styles.gridItem4}>
          <p>
            The <br /> grid
          </p>
        </div>
        <div className={styles.gridItem5}>
          <p>
            From up <br /> above VR
          </p>
        </div>
        <div className={styles.gridItem6}>
          <p>
            Pocket <br /> borealis
          </p>
        </div>
        <div className={styles.gridItem7}>
          <p>
            The <br /> curiosity
          </p>
        </div>
        <div className={styles.gridItem8}>
          <p>
            Make it <br /> fisheye
          </p>
        </div>
      </div>
    </section>
  );
}
