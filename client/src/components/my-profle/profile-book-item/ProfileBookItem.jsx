import Button from 'react-bootstrap/esm/Button';
import styles from '../MyProfile.module.css';

export default function ProfileBookFavorite() {
    return (
        <li>
            <hr className={styles.hr} />
            <div className='row pt-2 pb-2'>
                <div className='col-md-2 p-0'>
                    <img className={styles.favorites_img} src="https://www.orangecenter.bg/media/catalog/product/cache/bdc2c78f7e06003a3c29bc34b94b23a8/s/h/shogun-tom-1-9789542804437.jpg" alt="cart_img" />
                </div>
                <div className='col-md-7 pl-4'>
                    <h2 className={styles.book_title}>Shogun</h2>
                    <div>
                        <p className={styles.book_params1}>Author: <span><p className={styles.book_params2}>James Clavell</p></span></p>
                        <p className={styles.book_params_secondary}>Publisher: <span><p className={styles.book_params2}>Ciella</p></span></p>
                    </div>
                    <div>
                        <p className={styles.book_params1}>Language: <span><p className={styles.book_params2}>Bulgarian</p></span></p>
                        <p className={styles.book_params_secondary}>Year of Publication: <span><p className={styles.book_params2}>2022</p></span></p>
                    </div>
                    <div>
                        <h3 className={styles.book_description_h3}>Description</h3>
                        <div className={styles.scrollable_container}>
                            <p className={styles.description_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro cupiditate repudiandae officiis dolorem. Architecto culpa impedit harum recusandae quis, libero tempore iusto voluptatum molestiae tenetur expedita, nostrum eum dolore cupiditate in, vero dolor dolores velit sequi ab amet ullam. Reprehenderit nostrum illo temporibus veritatis asperiores ab expedita, ad odio placeat.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 mt-1'>
                    <Button className={styles.button_add} variant='primary'>
                        Add to Cart
                    </Button>
                    <Button className={styles.button_remove_favorite} variant='secondary'>
                        Remove from favorites
                    </Button>
                </div>
            </div>
            <hr className={styles.hr} />
        </li>
    );
}