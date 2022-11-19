import styles from './styles.module.css';
import classnames from 'classnames';

export const Genres = ({genres, func, activeGenre, className}) => {
    return (
        <nav className={classnames(styles.nav, className)}>
            <ul className={styles.nav__body}>
                {
                    genres.map((genre) => <li className={styles.nav__item} key={genre.id}><button className={classnames(styles.nav__itemText, {
                        [styles.nav__itemTextActive]: genre.id === activeGenre.id
                    })} onClick={() => func(genre)}>{genre.name}</button></li>)
                }
            </ul>
        </nav>
    );
};