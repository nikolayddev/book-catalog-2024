import styles from '../Details.module.css';

export default function CommentSection() {
    return (
        <div className={styles.scrollable_container}>
            <div className={styles.comment}>
                <p className={styles.comment_user}>George W Bush / 20.06.2023</p>
                <h4 className={styles.comment_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem sequi alias qui laborum impedit iure commodi? Magni accusamus ut excepturi perspiciatis vero. Aperiam illum autem ipsam fugit, maxime consequuntur!</h4>
            </div>
            <div className={styles.comment}>
                <p className={styles.comment_user}>George W Bush / 20.06.2023</p>
                <h4 className={styles.comment_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem sequi alias qui laborum impedit iure commodi? Magni accusamus ut excepturi perspiciatis vero. Aperiam illum autem ipsam fugit, maxime consequuntur!</h4>
            </div>
            <div className={styles.comment}>
                <p className={styles.comment_user}>George W Bush / 20.06.2023</p>
                <h4 className={styles.comment_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem sequi alias qui laborum impedit iure commodi? Magni accusamus ut excepturi perspiciatis vero. Aperiam illum autem ipsam fugit, maxime consequuntur!</h4>
            </div>
            <div className={styles.comment}>
                <p className={styles.comment_user}>George W Bush / 20.06.2023</p>
                <h4 className={styles.comment_content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem sequi alias qui laborum impedit iure commodi? Magni accusamus ut excepturi perspiciatis vero. Aperiam illum autem ipsam fugit, maxime consequuntur!</h4>
            </div>
        </div>
    );
}