export default function Header() {
    return (
        <div className="header_section">
            <div className="container">
                <div className="containt_main">
                    <div id="mySidenav" className="sidenav">
                        <a
                            href="javascript:void(0)"
                            className="closebtn"
                        >
                            ×
                        </a>
                        <a href="index.html">Home</a>
                        <a href="fashion.html">Fashion</a>
                        <a href="electronic.html">Electronic</a>
                        <a href="jewellery.html">Jewellery</a>
                    </div>
                    <span className="toggle_icon">
                        <img src="images/toggle-icon.png" />
                    </span>
                    <div className="dropdown">
                        <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            All Category
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">
                                Action
                            </a>
                            <a className="dropdown-item" href="#">
                                Another action
                            </a>
                            <a className="dropdown-item" href="#">
                                Something else here
                            </a>
                        </div>
                    </div>
                    <div className="main">
                        {/* Another variation with a button */}
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search this blog"
                            />
                            <div className="input-group-append">
                                <button
                                    className="btn btn-secondary"
                                    type="button"
                                    style={{ backgroundColor: "#f26522", borderColor: "#f26522" }}
                                >
                                    <i className="fa fa-search" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}