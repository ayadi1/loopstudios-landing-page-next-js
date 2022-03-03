import styles from "../styles/main.module.css";
export default function InfoSection() {
  return (
    <section className={styles.InfoSection}>
      <div className={styles.bgImage}></div>
      <div className={styles.infos}>
        <h2>The leader in interactive VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
}
