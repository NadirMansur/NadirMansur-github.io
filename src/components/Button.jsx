import React from 'react';
import styles from './Button.module.css';
const Button = ({ to, label }) => {
  return (
    <a href={to} className={styles.button}>
      {label}
    </a>
  );
};

export default Button;
