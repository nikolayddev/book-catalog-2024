import styles from '../Details.module.css'
import Button from 'react-bootstrap/esm/Button';
import { useDeleteComment } from '../../../hooks/useComments';

export default function DeleteComment({
    onDeleteComment,
    onClose,
    comment_id,
}) {
    const deleteComment = useDeleteComment();

    return (
        <div className={styles.overlay}>
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={styles.delete_prompt}>
                <div className='container'>
                    <h1>Delete Comment?</h1>
                    <div className={styles.delete_prompt_div}>
                        <Button className={styles.delete_prompt_buttons} onClick={() => {
                            deleteComment(comment_id);
                            onDeleteComment(comment_id);
                            }}>
                            Delete
                        </Button>
                        <Button className={styles.delete_prompt_buttons} onClick={onClose}>
                            Cancel
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}