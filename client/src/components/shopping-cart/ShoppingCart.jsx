import Button from 'react-bootstrap/esm/Button';
import styles from './ShoppingCart.module.css';

export default function ShoppingCart() {
    return (
        <div className={styles.container}>
            <h1 className={styles.shopping_cart_title}>Shopping Cart</h1>
            <p className={styles.price_text}>Price</p>
            <div>
                <ul>
                    <li>
                        <hr className={styles.hr} />
                        <div className='row pt-2 pb-2'>
                            <div className='col-md-2'>
                                <img className={styles.img} src="https://www.orangecenter.bg/media/catalog/product/cache/bdc2c78f7e06003a3c29bc34b94b23a8/s/h/shogun-tom-1-9789542804437.jpg" alt="cart_img" />
                            </div>
                            <div className='col-md-7 p-0'>
                                <h2 className={styles.book_title}>Shogun</h2>
                                <p className={styles.book_available}>In stock</p>
                                <p className={styles.book_params1}>Author: <span><p className={styles.book_params2}>James Clavell</p></span></p>
                                <p className={styles.book_params1}>Publisher: <span><p className={styles.book_params2}>Ciella</p></span></p>
                                <p className={styles.book_params1}>Year of publication: <span><p className={styles.book_params2}>2023</p></span></p>
                            </div>
                            <div className={styles.col_md_3}>
                                <h1 className={styles.price}>$21.34</h1>
                                <Button className={styles.button} variant='primary'>
                                    Remove from cart
                                </Button>
                            </div>
                        </div>
                        <hr className={styles.hr} />
                    </li>
                    <li>
                        <hr className={styles.hr} />
                        <div className='row pt-2 pb-2'>
                            <div className='col-md-2'>
                                <img className={styles.img} src="https://www.orangecenter.bg/media/catalog/product/cache/bdc2c78f7e06003a3c29bc34b94b23a8/s/h/shogun-tom-1-9789542804437.jpg" alt="cart_img" />
                            </div>
                            <div className='col-md-7 p-0'>
                                <h2 className={styles.book_title}>Shogun</h2>
                                <p className={styles.book_available}>In stock</p>
                                <p className={styles.book_params1}>Author: <span><p className={styles.book_params2}>James Clavell</p></span></p>
                                <p className={styles.book_params1}>Publisher: <span><p className={styles.book_params2}>Ciella</p></span></p>
                                <p className={styles.book_params1}>Year of publication: <span><p className={styles.book_params2}>2023</p></span></p>
                            </div>
                            <div className={styles.col_md_3}>
                                <h1 className={styles.price}>$21.34</h1>
                                <Button className={styles.button} variant='primary'>
                                    Remove from cart
                                </Button>
                            </div>
                        </div>
                        <hr className={styles.hr} />
                    </li>
                    <li>
                        <hr className={styles.hr} />
                        <div className='row pt-2 pb-2'>
                            <div className='col-md-2'>
                                <img className={styles.img} src="https://www.orangecenter.bg/media/catalog/product/cache/bdc2c78f7e06003a3c29bc34b94b23a8/s/h/shogun-tom-1-9789542804437.jpg" alt="cart_img" />
                            </div>
                            <div className='col-md-7 p-0'>
                                <h2 className={styles.book_title}>Shogun</h2>
                                <p className={styles.book_available}>In stock</p>
                                <p className={styles.book_params1}>Author: <span><p className={styles.book_params2}>James Clavell</p></span></p>
                                <p className={styles.book_params1}>Publisher: <span><p className={styles.book_params2}>Ciella</p></span></p>
                                <p className={styles.book_params1}>Year of publication: <span><p className={styles.book_params2}>2023</p></span></p>
                            </div>
                            <div className={styles.col_md_3}>
                                <h1 className={styles.price}>$21.34</h1>
                                <Button className={styles.button} variant='primary'>
                                    Remove from cart
                                </Button>
                            </div>
                        </div>
                        <hr className={styles.hr} />
                    </li>
                    <li>
                        <hr className={styles.hr} />
                        <div className='row pt-2 pb-2'>
                            <div className='col-md-2'>
                                <img className={styles.img} src="https://www.orangecenter.bg/media/catalog/product/cache/bdc2c78f7e06003a3c29bc34b94b23a8/s/h/shogun-tom-1-9789542804437.jpg" alt="cart_img" />
                            </div>
                            <div className='col-md-7 p-0'>
                                <h2 className={styles.book_title}>Shogun</h2>
                                <p className={styles.book_available}>In stock</p>
                                <p className={styles.book_params1}>Author: <span><p className={styles.book_params2}>James Clavell</p></span></p>
                                <p className={styles.book_params1}>Publisher: <span><p className={styles.book_params2}>Ciella</p></span></p>
                                <p className={styles.book_params1}>Year of publication: <span><p className={styles.book_params2}>2023</p></span></p>
                            </div>
                            <div className={styles.col_md_3}>
                                <h1 className={styles.price}>$21.34</h1>
                                <Button className={styles.button} variant='primary'>
                                    Remove from cart
                                </Button>
                            </div>
                        </div>
                        <hr className={styles.hr} />
                    </li>
                    <li>
                        <hr className={styles.hr} />
                        <div className='row pt-2 pb-2'>
                            <div className='col-md-2'>
                                <img className={styles.img} src="https://www.orangecenter.bg/media/catalog/product/cache/bdc2c78f7e06003a3c29bc34b94b23a8/s/h/shogun-tom-1-9789542804437.jpg" alt="cart_img" />
                            </div>
                            <div className='col-md-7 p-0'>
                                <h2 className={styles.book_title}>Shogun</h2>
                                <p className={styles.book_available}>In stock</p>
                                <p className={styles.book_params1}>Author: <span><p className={styles.book_params2}>James Clavell</p></span></p>
                                <p className={styles.book_params1}>Publisher: <span><p className={styles.book_params2}>Ciella</p></span></p>
                                <p className={styles.book_params1}>Year of publication: <span><p className={styles.book_params2}>2023</p></span></p>
                            </div>
                            <div className={styles.col_md_3}>
                                <h1 className={styles.price}>$21.34</h1>
                                <Button className={styles.button} variant='primary'>
                                    Remove from cart
                                </Button>
                            </div>
                        </div>
                        <hr className={styles.hr} />
                    </li>
                    <li>
                        <hr className={styles.hr} />
                        <div className='row pt-2 pb-2'>
                            <div className='col-md-2'>
                                <img className={styles.img} src="https://www.orangecenter.bg/media/catalog/product/cache/bdc2c78f7e06003a3c29bc34b94b23a8/s/h/shogun-tom-1-9789542804437.jpg" alt="cart_img" />
                            </div>
                            <div className='col-md-7 p-0'>
                                <h2 className={styles.book_title}>Shogun</h2>
                                <p className={styles.book_available}>In stock</p>
                                <p className={styles.book_params1}>Author: <span><p className={styles.book_params2}>James Clavell</p></span></p>
                                <p className={styles.book_params1}>Publisher: <span><p className={styles.book_params2}>Ciella</p></span></p>
                                <p className={styles.book_params1}>Year of publication: <span><p className={styles.book_params2}>2023</p></span></p>
                            </div>
                            <div className={styles.col_md_3}>
                                <h1 className={styles.price}>$21.34</h1>
                                <Button className={styles.button} variant='primary'>
                                    Remove from cart
                                </Button>
                            </div>
                        </div>
                        <hr className={styles.hr} />
                    </li>
                </ul>
                <div className={styles.subtotal_div}>
                    <h3 className={styles.subtotal_h3}>Subtotal (x items): <span className={styles.subtotal_span}>$45.32</span></h3>
                </div>
            </div>
        </div>
    );
}