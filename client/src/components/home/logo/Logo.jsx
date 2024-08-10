import styles from './Logo.module.css';

export default function Logo() {
    return (
        // <div className={styles.container}>
            <div className={styles.logo}>
                <a href="/">
                    <img className={styles.img} src="/images/logo1.png" alt="logo" />
                </a>
            </div>
        // </div>
    );
}