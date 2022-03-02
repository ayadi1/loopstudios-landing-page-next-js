import styles from "../styles/header.module.css";
export default function Header() {
  return (
    <header
      className={styles.header}
      style={
        {
          // backgroundImage: `url(/static/images/image-hero.jpg)`,
        }
      }
    >
      <div className={styles.container}>
        <nav className={styles.nav}>
          <h1>loopstudios</h1>
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
        </nav>
        <div className={styles.headerMessage}>
          Immersive experiences that deliver
        </div>
      </div>
    </header>
  );
}
