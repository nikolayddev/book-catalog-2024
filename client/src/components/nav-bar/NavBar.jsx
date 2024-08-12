import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'

export default function NavBar() {
    return (
        <div className={styles.container}>
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