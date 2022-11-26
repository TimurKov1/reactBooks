import { Link } from "react-router-dom";

export const NotFoundPage = () => {
    return <p>Такая страница не найдена. <Link to="/">Вернитесь на главную</Link></p>;
};