import { Link } from 'react-router-dom';
import styles from './CatalogItem.module.css';
import { useAuthContext } from '../../../contexts/AuthContext';

export default function CatalogItem({
    book
}) {
    const { isAuthenticated } = useAuthContext();

    return (
        <div className={styles.book_item}>
            <div className={styles.box_main}>
                <div>
                    <Link to={`/catalog/${book.genre}/${book._id}`}>
                        <img
                            src={book.imageURL}
                            className={styles.book_img}
                        />
                    </Link>
                </div>

                <h4 className={styles.book_title}>{book.title}</h4>
                <p className={styles.book_author}>{book.author}</p>

                <div className={styles.book_price_section}>
                    <Link to={`/catalog/${book.genre}/${book._id}`} className={styles.book_price}>${book.price}</Link>
                    <Link to={isAuthenticated
                        ? `/catalog/${book.genre}/${book._id}`
                        : '/login'} className={styles.book_buy_button}>Buy Now</Link>
                </div>

            </div>
        </div>
    );
}