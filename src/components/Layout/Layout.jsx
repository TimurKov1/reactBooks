import { Header } from './Header'
import styles from './styles.module.css'

export const Layout = (props) => {
    return <>
        <Header/>
        <main className={styles.main}>
            {props.children}
        </main>
    </>
}