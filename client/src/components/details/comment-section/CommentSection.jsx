import { useState } from 'react';
import { useGetAllCommentsById } from '../../../hooks/useComments';
import styles from '../Details.module.css';

export default function CommentSection({
    comments
}) {

    return (
        <div className={styles.scrollable_container}>
            {comments.map((comment) => (
                <div key={comment._id} className={styles.comment}>
                    <p className={styles.comment_user}>{comment._ownerId} / {comment._createdOn}</p>
                    <h4 className={styles.comment_content}>{comment.commentBody}</h4>
                </div>
            ))}
        </div>
    );
}