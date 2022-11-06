import { Review } from '../Review/Review';
import styles from './styles.module.css';

export const Reviews = ({reviews}) => {
    return <div>
        <ul className={styles.reviews__body}>
            {
                reviews.map((review) => <li className={styles.reviews__item} key={review.id}>
                    <Review review={review}/>
                </li>)
            }
        </ul>
    </div>
}