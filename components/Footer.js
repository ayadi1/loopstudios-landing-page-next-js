import styles from "../styles/footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h3>loopstudios</h3>
          <ul>
            <li className={styles.facebook}></li>
            <li className={styles.twitter}></li>
            <li className={styles.pinterest}></li>
            <li className={styles.instagram}></li>
          </ul>
        </div>
        <div className={styles.linksMessage}>
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Events</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
          <p>© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </div>
      <div className={styles.me}>
        coded by{" "}
        <a href="https://www.linkedin.com/in/oussama-ayadi1/">oussama ayadi</a>
      </div>
    </footer>
  );
}
