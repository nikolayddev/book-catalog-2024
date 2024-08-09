import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="container">
            <div className="header_section_top">
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
                                    <Link to="/Catalog">Catalog</ Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</ Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</ Link>
                                </li>
                                <li>
                                    <div className="login_menu">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-shopping-cart" />
                                                    <span className="padding_10">Cart</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}