import { Link } from 'react-router-dom';
import styles from './CatalogItem.module.css';

export default function CatalogItem({
    book
}) {
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
                    <a href="#" className={styles.book_price}>${book.price}</a>
                    <a href="#" className={styles.book_buy_button}>Buy Now</a>
                </div>

            </div>
        </div>
    );
}