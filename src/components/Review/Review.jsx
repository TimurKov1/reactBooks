import styles from "./styles.module.css";

export const Review = ({ review }) => {
  return (
    <article className={styles.review}>
      <div className={styles.review__header}>
        <h3 className={styles.review__author}>{review.author}</h3>
        <h4 className={styles.review__amount}>{review.review}</h4>
      </div>
      <h4 className={styles.review__text}>{review.text}</h4>
    </article>
  );
};
