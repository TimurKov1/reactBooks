import styles from "./styles.module.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.link} to="/"><h1 className={styles.text}>Магазин</h1></Link>
      <Link className={styles.link} to="/cart"><img src="cart.svg" alt=""/></Link>
    </header>
  );
};
