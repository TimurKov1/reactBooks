import { useSelector } from "react-redux";
import { selectCartModule } from "../../store/cart/selectors";
import { CartBooks } from "../../components/CartBooks/CartBooks";
import { Order } from "../../components/Order/Order";

export const CartPage = () => {
    const books = useSelector(state => selectCartModule(state));

    if (!books) {
        return null;
    }

    return (
        <>
            <Order books={books} />
            <CartBooks books={books} />
        </>
    );
};