import { Link } from 'react-router-dom';
import styles from './Navbar.module.css'
import { useAuthContext } from '../../contexts/AuthContext.jsx';
import { useNav } from '../../hooks/useNav';

export default function NavBar() {
    const { isAuthenticated } = useAuthContext();
    const [isSticky, isVisible] = useNav();

    return (
        <div className={`${styles.container} ${isSticky ? styles.container_sticky : ''} ${isVisible ? styles.container_visible : styles.container_hidden}`}>
            <div className={styles.header_section}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="custom_menu">

                            <ul>
                                {isAuthenticated
                                    ? (
                                        <li>
                                            <Link to="/my-profile">
                                                <i className="fa fa-user" />
                                                <span className='padding_10'>My Profile</span>
                                            </ Link>
                                        </li>
                                    ) : ''}

                                <li>
                                    <Link to="/">Home</ Link>
                                </li>
                                <li>
                                    <Link to="/catalog">Catalog</ Link>
                                </li>
                                {isAuthenticated
                                    ? (
                                        <li>
                                            <Link to="/create">Create</ Link>
                                        </li>
                                    ) : ''}
                                {isAuthenticated ? '' : (
                                    <li>
                                        <Link to="/login">Login</ Link>
                                    </li>
                                )}
                                {isAuthenticated ? '' : (
                                    <li>
                                        <Link to="/register">Register</ Link>
                                    </li>
                                )}
                                {/* {isAuthenticated
                                    ? (<li>
                                        <Link to="/cart">
                                            <i className="fa fa-shopping-cart" />
                                            <span className="padding_10">Cart</span>
                                        </Link>
                                    </li>)
                                    : ''
                                } */}
                                {isAuthenticated
                                    ? (<li>
                                        <Link to="/logout">Logout</Link>
                                    </li>)
                                    : ''}

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}