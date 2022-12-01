import { useSelector } from "react-redux";
import { selectBooks } from "../../store/cart/selectors";
import { CartBooks } from "../../components/CartBooks/CartBooks";
import { Order } from "../../components/Order/Order";

export const CartPage = () => {
    const books = useSelector(state => selectBooks(state));

    if (!books) {
        return null;
    }

    return (
        <>
            {books && <Order books={books} />}
            {books && <CartBooks books={books} />}
        </>
    );
};