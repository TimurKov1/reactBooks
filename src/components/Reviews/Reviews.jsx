import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadReviewsIfNotExist } from "../../store/review/loadReviewsIfNotExist";
import { selectReviews } from "../../store/review/selectors";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ bookId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => selectReviews(state));

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(bookId));
  }, []);
  
  if (!reviews) {
    return null;
  }

  return (
    <section>
      <ul className={styles.reviews__body}>
        {reviews.map((review) => (
          <li className={styles.reviews__item} key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
    </section>
  );
};
