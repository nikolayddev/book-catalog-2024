import { useEffect, useRef } from 'react';
import styles from '../Details.module.css'
import Button from 'react-bootstrap/esm/Button';

export default function AddComment({
    isOpen,
    onClose
}) {

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
                <form>
                    <div>
                        <label className={styles.comment_form_label}>Add Comment</label>
                        <textarea ref={textareaRef} className={styles.comment_form_input} placeholder="" ></textarea>
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