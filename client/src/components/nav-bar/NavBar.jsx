import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react';

export default function NavBar() {

    const [isVisible, setIsVisible] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }

            setIsVisible(currentScrollY < prevScrollY);
            setPrevScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollY]);

    return (
        <div className={`${styles.container} ${isSticky ? styles.container_sticky : ''} ${isVisible ? styles.container_visible : styles.container_hidden}`}>
            <div className={styles.header_section}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="custom_menu">

                            <ul>
                                <li>
                                    <Link to="/my-profile">
                                        <i className="fa fa-user" />
                                        <span className='padding_10'>My Profile</span>
                                    </ Link>
                                </li>
                                <li>
                                    <Link to="/">Home</ Link>
                                </li>
                                <li>
                                    <Link to="/catalog">Catalog</ Link>
                                </li>
                                <li>
                                    <Link to="/create">Create</ Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</ Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</ Link>
                                </li>
                                <li>
                                    <Link to="/cart">
                                        <i className="fa fa-shopping-cart" />
                                        <span className="padding_10">Cart</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}