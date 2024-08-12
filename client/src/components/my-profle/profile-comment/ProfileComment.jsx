import styles from '../MyProfile.module.css';

export default function ProfileComment() {
    return (
        <div className={styles.recent_upload_container_main}>
            <p className={styles.recent_upload_title}>You commented on <span className={styles.title_span}>"Shogun"</span> by James Clavell</p>
            <p className={styles.recent_upload_date}>10.08.2024</p>
            <div className={styles.recent_upload_container}>
                <div className={styles.comment}>
                    <p className={styles.comment_user}>Victor Von Doom</p>
                    <h4 className={styles.comment_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem sequi alias qui laborum impedit iure commodi? Magni accusamus ut excepturi perspiciatis vero. Aperiam illum autem ipsam fugit, maxime consequuntur!</h4>
                </div>
            </div>
        </div>
    );
}