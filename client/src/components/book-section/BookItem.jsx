import styles from './BookItem.module.css';

export default function BookItem() {
    return (
        <div className={styles.book_item}>
            <div>
                <div className="box_main">
                    <h4 className="shirt_text">Man T -shirt</h4>
                    <p className="price_text">
                        Price <span style={{ color: "#262626" }}>$ 30</span>
                    </p>
                    <div>
                        {/* className="tshirt_img" */}
                        <img src="images/tshirt-img.png" />
                    </div>
                    <div className="btn_main">
                        <div className="buy_bt">
                            <a href="#">Buy Now</a>
                        </div>
                        <div className="seemore_bt">
                            <a href="#">See More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}