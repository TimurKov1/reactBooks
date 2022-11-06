import { Book } from '../Book/Book';
import styles from './styles.module.css';
import classnames from 'classnames';

export const Books = ({books, className}) => {
    return <div className={classnames(styles.books, className)}>
        <ul className={styles.books__body}>
            {
                books.map((book) => <li className={styles.books__item} key={book.id}><Book position='center' book={book}/></li>)
            }
        </ul>
    </div>
}