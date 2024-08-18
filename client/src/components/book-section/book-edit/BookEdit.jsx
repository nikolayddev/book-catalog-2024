import Button from 'react-bootstrap/Button';
import styles from './BookEdit.module.css';

import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useForm } from '../../../hooks/useForm';
import { useUpdateBook } from '../../../hooks/useBooks';
import { useState } from 'react';


export default function BookEdit() {
    const editBook = useUpdateBook();
    const navigate = useNavigate();
    const location = useLocation();
    const initialValues = location.state || {};
    const { id: book_id } = useParams();
    const [error, setError] = useState('');

    console.log(initialValues);

    const submitCallback = async (values) => {
        try {
            for (const field in values) {
                if (values[field] === '') {
                    throw new Error('All fields are required!');
                }
            }

            const { genre } = await editBook(book_id, values);
            navigate(`/catalog/${genre}/${book_id}`);
        } catch (err) {
            setError(err.message);
            console.log(err.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, submitCallback);

    return (
        <>
            <div className="login_container">
                <h1 className="login_title_text">Edit Book</h1>
                <div className="fashion_section_2">
                    <div className="col-lg-12 col-sm-4">
                        <div className="box_main">
                            <form onSubmit={submitHandler}>
                                <div className='row pt-1'>
                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Title</label>
                                        <input className={styles.input} type="text" name="title" onChange={changeHandler} value={values.title} />
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Author</label>
                                        <input className={styles.input} type="text" name="author" onChange={changeHandler} value={values.author} />
                                    </div>
                                </div>

                                <div className='row pt-4'>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Publisher</label>
                                        <input className={styles.input} type="text" name="publisher" onChange={changeHandler} value={values.publisher} />
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Year of Publication</label>
                                        <input className={styles.input} type="number" name="yearOfPublication" onChange={changeHandler} value={values.yearOfPublication} />
                                    </div>
                                </div>

                                <div className='row pt-4'>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Language</label>
                                        <input className={styles.input} type="text" name="language" onChange={changeHandler} value={values.language} />
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Page Count</label>
                                        <input className={styles.input} type="number" name="pageCount" onChange={changeHandler} value={values.pageCount} />
                                    </div>
                                </div>

                                <div className='row pt-4'>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Format</label>
                                        <div>
                                            <select id="options" className={styles.select} name="format" onChange={changeHandler} value={values.format}>
                                                <option value="" disabled hidden>Select an option</option>
                                                <option value="Soft Cover">Soft Cover</option>
                                                <option value="Hard Copy">Hard Copy</option>
                                                <option value="Audio Book">Audio Book</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Image URL</label>
                                        <input className={styles.input} type="url" name="imageURL" onChange={changeHandler} value={values.imageURL} />
                                    </div>
                                </div>

                                <div className='row pt-4'>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Genre</label>
                                        <div>
                                            <select id="options" className={styles.select} name="genre" onChange={changeHandler} value={values.genre}>
                                                <option value="" disabled hidden>Select an option</option>
                                                <option value="science-fiction">Science Fiction</option>
                                                <option value="adventure">Adventure</option>
                                                <option value="fantasy">Fantasy</option>
                                                <option value="thriller">Thriller</option>
                                                <option value="historical-fiction">Historical Fiction</option>
                                                <option value="graphic-novel">Graphic Novel</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Price $</label>
                                        <input className={styles.input} type="number" name="price" onChange={changeHandler} value={values.price} />
                                    </div>
                                </div>

                                <div className={styles.description}>
                                    <label className={styles.create_form_labels}>Description</label>
                                    <textarea className={styles.description_textarea} type="textarea" name="description" onChange={changeHandler} value={values.description}></textarea>
                                </div>
                                {error &&
                                    <div>
                                        <h1 className={styles.err_class}>{error}</h1>
                                    </div>
                                }
                                <div className={styles.button_div}>
                                    <Button className={styles.button} variant="secondary" type="submit">
                                        Update Book
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        </>
    );
}

