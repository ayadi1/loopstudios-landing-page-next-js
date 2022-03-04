import styles from "../styles/main.module.css";
import InfoSection from "./InfoSection";
import CreationsList from "./CreationsList";
export default function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <InfoSection />
        <CreationsList />
      </div>
    </main>
  );
}
