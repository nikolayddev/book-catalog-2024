import styles from '../Details.module.css';
import Button from 'react-bootstrap/esm/Button';
import { useAuthContext } from '../../../contexts/AuthContext.jsx';

export default function CommentSection({
    comments,
    deleteBtnHandler,
    editBtnHandler
}) {
    const { isAuthenticated, user_id } = useAuthContext();

    return (
        <div className={styles.scrollable_container}>
            {comments.map((comment) => (
                <div key={comment._id} className={styles.comment}>
                    <p className={styles.comment_user}>{comment._ownerId} / {comment._createdOn}</p>
                    <h4 className={styles.comment_content}>{comment.commentBody}</h4>
                    {(isAuthenticated && user_id === comment._ownerId) ? (<div className={styles.edit_buttons_div}>
                        <Button onClick={() => editBtnHandler(comment._id)} className={styles.edit_btn}>
                            <img className={styles.edit_img} src="/images/edit-button.png" alt="edit" />
                        </Button>
                        <Button onClick={() => deleteBtnHandler(comment._id)} className={styles.delete_btn}>
                            <img className={styles.delete_img} src="/images/delete-button.png" alt="delete" />
                        </Button>
                    </div>) : ''
                    }
                </div>
            ))}
        </div>
    );
}