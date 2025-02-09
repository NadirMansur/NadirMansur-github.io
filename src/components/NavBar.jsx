import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h1>Bienvenido al Timbrado Virtual</h1>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to='/'>
            BOTONERA
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
