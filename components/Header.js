import { useState } from "react";
import styles from "../styles/header.module.css";
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const hadeMenu = () => {
    const nav = document.getElementById("nav");
    nav.classList.add("hadeMenu");
    nav.classList.remove("showMenu");
  };

  const showMenuBtn = () => {
    const nav = document.getElementById("nav");

    nav.classList.add("showMenu");
    nav.classList.remove("hadeMenu");
  };
  return (
    <header className={styles.header}>
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
          <i id="icon" onClick={showMenuBtn} className={styles.icon}></i>
        </nav>
        <div className={styles.headerMessage}>
          Immersive experiences that deliver
        </div>
      </div>
      <div id="nav" className="mobileMenu">
        <div className="head">
          <h2>loopstudios</h2>
          <i onClick={hadeMenu}></i>
        </div>
        <div className="body">
          <nav>
            <ul>
              <li>
                <a href="#">ABOUT</a>
              </li>
              <li>
                <a href="#">CAREERS</a>
              </li>
              <li>
                <a href="#">EVENTS</a>
              </li>
              <li>
                <a href="#">PRODUCTS</a>
              </li>
              <li>
                <a href="#">SUPPORT</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
