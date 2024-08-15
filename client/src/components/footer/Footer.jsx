import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className="footer_section layout_padding">
            <div className="container">
                <div className="footer_logo">
                    <a href="index.html">
                        <img className={styles.logo} src="images/logo1.png" />
                    </a>
                </div>
                <div className="input_bt">
                    <input
                        type="text"
                        className="mail_bt"
                        placeholder="Your Email"
                        name="Your Email"
                    />
                    <span className="subscribe_bt" id="basic-addon2">
                        <a href="#">Subscribe</a>
                    </span>
                </div>
                <div className="footer_menu">
                    <ul>
                        <li>
                            <a href="#">Best Sellers</a>
                        </li>
                        <li>
                            <a href="#">New Releases</a>
                        </li>
                        <li>
                            <a href="#">Favorite Books</a>
                        </li>
                        <li>
                            <a href="#">Customer Service</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}