import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadReviewsIfNotExist } from "../../store/review/loadReviewsIfNotExist";
import { selectReviews } from "../../store/review/selectors";
import { loadUsersIfNotExist } from "../../store/user/loadUsersIfNotExist";
import { selectUsers } from "../../store/user/selectors";
import { Review } from "../Review/Review";
import styles from "./styles.module.css";

export const Reviews = ({ bookId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => selectReviews(state));
  const users = useSelector((state) => selectUsers(state));

  useEffect(() => {
    dispatch(loadReviewsIfNotExist(bookId));
    dispatch(loadUsersIfNotExist);
  }, []);
  
  if (!reviews || !users) {
    return null;
  }

  return (
    <section>
      <ul className={styles.reviews__body}>
        {reviews.map((review) => (
          <li className={styles.reviews__item} key={review.id}>
            <Review review={review} users={users}/>
          </li>
        ))}
      </ul>
    </section>
  );
};
