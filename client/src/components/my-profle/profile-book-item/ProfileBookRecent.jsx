import { Link } from "react-router-dom";
import styles from '../MyProfile.module.css';

export default function ProfileBookRecent() {
    return (
        <div className={styles.recent_upload_container_main}>
            <p className={styles.recent_upload_title}>You uploaded a Book Item to the Catalog</p>
            <p className={styles.recent_upload_date}>10.08.2024</p>
            <div className={styles.recent_upload_container}>
                <div className='row pt-2 pb-2'>
                    <div className='col-md-2 p-0'>
                        <Link to="/details">
                            <img className={styles.recent_upload_img} src="https://www.orangecenter.bg/media/catalog/product/cache/bdc2c78f7e06003a3c29bc34b94b23a8/s/h/shogun-tom-1-9789542804437.jpg" alt="cart_img" />
                        </Link>
                    </div>
                    <div className='col-md-10 pl-0'>
                        <h2 className={styles.book_title}>Shogun</h2>
                        <div>
                            <p className={styles.book_params1}>Author: <span><p className={styles.book_params2}>James Clavell</p></span></p>
                            <p className={styles.book_params_secondary}>Publisher: <span><p className={styles.book_params2}>Ciella</p></span></p>
                        </div>
                        <div>
                            <p className={styles.book_params1}>Language: <span><p className={styles.book_params2}>Bulgarian</p></span></p>
                            <p className={styles.book_params_secondary}>Year of Publication: <span><p className={styles.book_params2}>2022</p></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}