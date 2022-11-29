import styles from "./styles.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersIfNotExist } from "../../store/user/loadUsersIfNotExist";
import { selectUser } from "../../store/user/selectors";

export const Review = ({ review }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUsersIfNotExist(review.userId));
  }, []);

  const user = useSelector((state) => selectUser(state));

  console.log(user);

  return (
    <article className={styles.review}>
      <div className={styles.review__header}>
        <h3 className={styles.review__author}>{review.userId}</h3>
        <h4 className={styles.review__amount}>{review.review}</h4>
      </div>
      <h4 className={styles.review__text}>{review.text}</h4>
    </article>
  );
};
