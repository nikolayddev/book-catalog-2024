import { useEffect, useRef, useState } from 'react';
import styles from '../Details.module.css'
import Button from 'react-bootstrap/esm/Button';
import { useUpdateComment } from '../../../hooks/useComments';
import { useForm } from '../../../hooks/useForm';

export default function EditComment({
    onEditComment,
    isOpen,
    onClose,
    comment_id,
    commentBody,
    book_id
}) {
    const initialValues = {
        commentBody: ''
    }

    const editComment = useUpdateComment();

    const submitCallback = async (values) => {
        try {
            const result = await editComment(comment_id, values, book_id);
            onEditComment(result);
        } catch (err) {
            alert(err.message);
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, submitCallback);

    const textareaRef = useRef(null);

    useEffect(() => {
        if (isOpen && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={styles.modal}>
                <form onSubmit={submitHandler}>
                    <div>
                        <label className={styles.comment_form_label}>Edit Comment</label>
                        <textarea ref={textareaRef} className={styles.comment_form_input}
                            name="commentBody"
                            onChange={changeHandler}
                            value={values.commentBody}
                        ></textarea>
                    </div>
                    <div className={styles.comment_form_button_div}>
                        <Button className={styles.comment_form_button} variant="primary" type="submit">
                            Post
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}