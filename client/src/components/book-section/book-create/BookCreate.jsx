import Button from 'react-bootstrap/Button';
import styles from './BookCreate.module.css';

import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateBook } from '../../../hooks/useBooks';

export default function BookCreate() {
    const createBook = useCreateBook();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (data) => {
        const dataGuard = {
            price: data.price,
            genre: data.genre,
            title: data.title,
            author: data.author,
            publisher: data.publisher,
            description: data.description,
            language: data.language,
            pageCount: data.pageCount,
            format: data.format,
            yearOfPublication: data.yearOfPublication,
            imageURL: data.imageURL
        }

        await createBook(dataGuard);
        navigate(`/catalog`);
    }

    const errorEntries = Object.entries(errors);

    return (
        <>
            <div className="login_container">
                <h1 className="login_title_text">Upload a Book</h1>
                <div className="fashion_section_2">
                    <div className="col-lg-12 col-sm-4">
                        <div className="box_main">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='row pt-1'>
                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Title</label>
                                        <input
                                            className={`${styles.input} ${errors.title ? styles.input_error : ""}`}
                                            {...register("title", { required: true })}
                                            type="text"
                                        />
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Author</label>
                                        <input
                                            className={`${styles.input} ${errors.author ? styles.input_error : ""}`}
                                            {...register("author", { required: true })}
                                            type="text" />
                                    </div>
                                </div>

                                <div className='row pt-4'>
                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Publisher</label>
                                        <input
                                            className={`${styles.input} ${errors.publisher ? styles.input_error : ""}`}
                                            {...register("publisher", { required: true })}
                                            type="text" />
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Year of Publication</label>
                                        <input
                                            className={`${styles.input} ${errors.yearOfPublication ? styles.input_error : ""}`}
                                            {...register("yearOfPublication", { required: true })}
                                            type="number" />
                                    </div>
                                </div>

                                <div className='row pt-4'>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Language</label>
                                        <input
                                            className={`${styles.input} ${errors.language ? styles.input_error : ""}`}
                                            {...register("language", { required: true })}
                                            type="text" />
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Page Count</label>
                                        <input
                                            className={`${styles.input} ${errors.pageCount ? styles.input_error : ""}`}
                                            {...register("pageCount", { required: true })}
                                            type="number" />
                                    </div>
                                </div>

                                <div className='row pt-4'>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Format</label>
                                        <div>
                                            <select id="options" className={styles.select} {...register("format", { required: true })}>
                                                <option value="" disabled hidden>Select an option</option>
                                                <option value="Soft Cover">Soft Cover</option>
                                                <option value="Hard Copy">Hard Copy</option>
                                                <option value="Audio Book">Audio Book</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Image URL</label>
                                        <input
                                            className={`${styles.input} ${errors.imageURL ? styles.input_error : ""}`}
                                            {...register("imageURL", { required: true })}
                                            type="url" />
                                    </div>
                                </div>

                                <div className='row pt-4'>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Genre</label>
                                        <div>
                                            <select id="options" className={styles.select} {...register("genre", { required: true })}>
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
                                        <input
                                            className={`${styles.input} ${errors.price ? styles.input_error : ""}`}
                                            {...register("price", { required: true })}
                                            type="number" />
                                    </div>
                                </div>

                                <div className={styles.description}>
                                    <label className={styles.create_form_labels}>Description</label>
                                    <textarea
                                        className={`${styles.description_textarea} ${errors.description ? styles.description_error : ""}`}
                                        {...register("description", { required: true })}
                                        type="textarea">
                                    </textarea>
                                </div>
                                {(errorEntries.length > 0) &&
                                    <div>
                                        <h1 className={styles.err_class}>{"All fields are required!"}</h1>
                                    </div>
                                }
                                <div className={styles.button_div}>
                                    <Button className={styles.button} variant="secondary" type="submit">
                                        Add Book
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