import styles from './Details.module.css'
import Button from 'react-bootstrap/esm/Button';
import { useDeleteBook } from '../../hooks/useBooks';
import { useNavigate } from 'react-router-dom';

export default function DeleteBook({
    onClose,
    book_id
}) {
    const deleteBook = useDeleteBook();
    const navigate = useNavigate();

    return (
        <div className={styles.overlay}>
            <div className={styles.backdrop} onClick={onClose}></div>
            <div className={styles.delete_prompt_book}>
                <div className='container'>
                    <h1>Delete Book Entry?</h1>
                    <div className={styles.delete_prompt_div}>
                        <Button className={styles.delete_prompt_buttons} onClick={() => {
                            deleteBook(book_id);
                            navigate('/catalog');
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