import DropdownBtn from './DropdownBtn';
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.header_section}>
            <div className="container">
                <div className="containt_main">
                    <div className="dropdown">
                        <DropdownBtn />
                    </div>
                    
                    {/* SEARCH BAR */}
                    <div className={styles.main}>
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