import styles from './CatalogItem.module.css';

export default function CatalogItem() {
    return (
        <div className={styles.book_item}>
            <div className={styles.box_main}>
                <div>
                    <a href="#">
                        <img
                            src="https://www.orangecenter.bg/media/catalog/product/cache/bdc2c78f7e06003a3c29bc34b94b23a8/s/h/shogun-tom-1-9789542804437.jpg"
                            className={styles.book_img}
                        />
                    </a>
                </div>

                <h4 className={styles.book_title}>Shogun: Part 1</h4>
                <p className={styles.book_author}>James Clavell</p>

                <div className={styles.book_price_section}>
                    <a href="#" className={styles.book_price}>$19.85</a>
                    <a href="#" className={styles.book_buy_button}>Buy Now</a>
                </div>

            </div>
        </div>
    );
}