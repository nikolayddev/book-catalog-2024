import { useEffect, useRef, useState } from "react";

import styles from './Details.module.css'
import CommentSection from "./comment-section/CommentSection";
import Button from "react-bootstrap/esm/Button";
import AddComment from "./comment-section/AddComment";
import { useParams } from "react-router-dom";
import { getOne } from "../../api/books-api";

export default function Details() {

    const [activeButton, setActiveButton] = useState('description');
    const [showAddComment, setShowAddComment] = useState(false);
    const [currentBook, setCurrentBook] = useState({});

    const { genre, id: book_id } = useParams();

    useEffect(() => {
        (async () => {
            const result = await getOne(genre, book_id);
            setCurrentBook(result);
        })();
    }, [genre, book_id]);

    const addCommentClickHandler = () => {
        setShowAddComment(true);
    }

    const addCommentCloseHandler = () => {
        setShowAddComment(false);
    }

    return (
        <>
            <div className={styles.container}>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-4 pt-1">
                                <div className={styles.box_main}>
                                    <div>
                                        <img src={currentBook.imageURL} className={styles.book_img} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div>
                                    <h2 className={styles.table_title}>{currentBook.title}</h2>
                                    <h4 className={styles.table_title_genre}>{currentBook.genre}</h4>
                                    <hr className={styles.hr} />
                                    <table className={styles.table}>
                                        <tbody>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Author
                                                </td>
                                                <td className={styles.td}>
                                                    {currentBook.author}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Publisher
                                                </td>
                                                <td className={styles.td}>
                                                    {currentBook.publisher}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Year of Publication
                                                </td>
                                                <td className={styles.td}>
                                                    {currentBook.yearOfPublication}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Page count
                                                </td>
                                                <td className={styles.td}>
                                                    {currentBook.pageCount}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Format
                                                </td>
                                                <td className={styles.td}>
                                                    {currentBook.format}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Language
                                                </td>
                                                <td className={styles.td}>
                                                    {currentBook.language}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td_labels_last}>
                                                    Categories
                                                </td>
                                                <td className={styles.td_last}>
                                                    Historical Drama, Novel, World Prose
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 ml-auto pt-4">
                        <div className={styles.box}>
                            <div>
                                <h4 className={styles.box_cover}>{currentBook.format}</h4>
                                <p className={styles.box_available}>&#10003; Available</p>
                                <p className={styles.box_unavailable}>X Unavailable</p>
                                <p className={styles.box_price}>Price: ${currentBook.price}</p>
                                <ul>
                                    <li className={styles.box_li}>
                                        <a href="#" className={styles.btn_buy}>Add to Cart</a>
                                    </li>
                                    <li className={styles.box_li}>
                                        <a href="#" className={styles.btn_favorites}>&#9733; ADD TO FAVORITES</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row pt-4">
                    <div className={styles.ul}>
                        <ul>
                            <li>
                                <button onClick={() => { setActiveButton('description') }} className={activeButton == 'description' ? styles.btn_comments_active : styles.btn_comments}>Description</button>
                                <button onClick={() => { setActiveButton('comments') }} className={activeButton == 'comments' ? styles.btn_comments_active : styles.btn_comments}>Comments</button>
                            </li>
                        </ul>
                        {activeButton == 'description' &&
                            <div className={styles.div_description}>
                                <p className={styles.p_description}>{currentBook.description}</p>
                            </div>
                        }

                        {activeButton == 'comments' &&
                            <div className={styles.div_comments}>
                                <CommentSection />
                            </div>
                        }
                    </div>
                </div>
                {activeButton == 'comments' &&
                    <div className={styles.button_div}>
                        <Button onClick={addCommentClickHandler} className={styles.button} variant="secondary" type="submit">
                            Add Comment
                        </Button>
                    </div>
                }
            </div>

            {showAddComment && <AddComment
                onClose={addCommentCloseHandler}
                isOpen={showAddComment}
            />}
        </>
    );
}