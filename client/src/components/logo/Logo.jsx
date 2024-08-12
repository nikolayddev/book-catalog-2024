import { Link } from 'react-router-dom';
import styles from './Logo.module.css';

export default function Logo() {
    return (
        <div className={styles.logo}>
            <Link to="/">
                <img className={styles.img} src="/images/logo1.png" alt="logo" />
            </Link>
        </div>
    );
}