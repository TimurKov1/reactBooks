import styles from "./styles.module.css";
import classnames from "classnames";

export const Description = ({ description, className }) => {
  return (
    <div className={classnames(styles.description, className)}>
      <div>
        <h3 className={styles.description__title}>Аннотация</h3>
        <h4 className={styles.description__text}>{description}</h4>
      </div>
    </div>
  );
};
