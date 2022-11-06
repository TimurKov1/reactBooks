import { Layout } from './components/Layout/Layout';
import { BooksPage } from './pages/BooksPage/BooksPage';
import { BookPage } from './pages/BookPage/BookPage';
import { genres } from './constants/mock'

export function App() {
    return <Layout>
        {/* <BookPage book={genres[0].books[0]}/> */}

        
        <BooksPage genres={genres}/> 
    </Layout>
}