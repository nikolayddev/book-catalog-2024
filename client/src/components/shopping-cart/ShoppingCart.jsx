import Button from 'react-bootstrap/esm/Button';
import styles from './ShoppingCart.module.css';
import { useGetAllCartItems, useUpdateInCart } from '../../hooks/useCart';

export default function ShoppingCart() {
    const [allCartItems, setAllCartItems] = useGetAllCartItems();
    // const [totalPrice] = useCalculateTotalPrice();
    const patchInCart = useUpdateInCart();

    const handleDeleteCartItem = (cartItem_id) => {
        setAllCartItems(prevCartItem => prevCartItem.filter(cartItem => cartItem._id != cartItem_id));
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.shopping_cart_title}>Shopping Cart</h1>
            {allCartItems.length > 0 && <p className={styles.price_text}>Price</p>}
            <div>
                {allCartItems.length <= 0 ?
                    <h1>There are no items in your cart</h1> :
                    <ul>
                        {allCartItems.map((cartItem) => (
                            <li key={cartItem._id}>
                                <hr className={styles.hr} />
                                <div className='row pt-2 pb-2'>
                                    <div className='col-md-2'>
                                        <img className={styles.img} src={cartItem.imageURL} alt="cart_img" />
                                    </div>
                                    <div className='col-md-7 p-0'>
                                        <h2 className={styles.book_title}>{cartItem.title}</h2>
                                        <p className={styles.book_available}>In stock</p>
                                        <p className={styles.book_params1}>Author: <span><p className={styles.book_params2}>{cartItem.author}</p></span></p>
                                        <p className={styles.book_params1}>Publisher: <span><p className={styles.book_params2}>{cartItem.publisher}</p></span></p>
                                        <p className={styles.book_params1}>Year of publication: <span><p className={styles.book_params2}>{cartItem.yearOfPublication}</p></span></p>
                                    </div>
                                    <div className={styles.col_md_3}>
                                        <h1 className={styles.price}>${cartItem.price}</h1>
                                        <Button onClick={() => {
                                            patchInCart(cartItem._id, { ...cartItem, inCart: false });
                                            handleDeleteCartItem(cartItem._id);
                                        }}
                                            className={styles.button} variant='primary'>
                                            Remove from cart
                                        </Button>
                                    </div>
                                </div>
                                <hr className={styles.hr} />
                            </li>
                        ))}
                    </ul>
                }
                {allCartItems.length > 0 ?
                    <div className={styles.subtotal_div}>
                        <h3 className={styles.subtotal_h3}>Subtotal ({allCartItems.length} items): <span className={styles.subtotal_span}>$120</span></h3>
                    </div> : ''
                }
            </div>
        </div>
    );
}