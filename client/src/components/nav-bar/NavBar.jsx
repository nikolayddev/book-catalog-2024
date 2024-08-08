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
                                    <Link to="/my-profile">My Profile</ Link>
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
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}