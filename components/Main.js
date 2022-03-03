import styles from "../styles/main.module.css";
import InfoSection from "./InfoSection";
export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <InfoSection />
      </div>
    </main>
  );
}
