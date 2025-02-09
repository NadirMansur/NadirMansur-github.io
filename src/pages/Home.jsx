import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.title}>Elije el departamento:</div>
      <div className={styles.container}>
        <Link className={styles.link} to='/floor/2A'>
          Dept. 2A
        </Link>
        <br />
      </div>
    </div>
  );
};

export default Home;
