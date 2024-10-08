import { useState } from "react";

import styles from './Details.module.css'
import CommentSection from "./comment-section/CommentSection";
import Button from "react-bootstrap/esm/Button";
import AddComment from "./comment-section/AddComment";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetOneBook } from "../../hooks/useBooks";
import { useGetAllCommentsById, useGetOneComment } from "../../hooks/useComments";
import { useAuthContext } from "../../contexts/AuthContext.jsx";
import DeleteComment from "./comment-section/DeleteComment";
import EditComment from "./comment-section/EditComment";
import DeleteBook from "./DeleteBook";
import { useCreateCartItem, useDeleteCartItem, useInCart } from "../../hooks/useCart.js";
import { useCreateFavoritesItem, useDeleteFavoritesItem, useInFavorites } from "../../hooks/useFavorites.js";

export default function Details() {
    const { isAuthenticated, user_id } = useAuthContext();

    const { id: book_id } = useParams();
    const navigate = useNavigate();
    const addToCart = useCreateCartItem();
    const removeFromCart = useDeleteCartItem();
    const addToFavorites = useCreateFavoritesItem();
    const removeFromFavorites = useDeleteFavoritesItem();

    const [currentBook] = useGetOneBook(book_id);

    const initialValues = {
        price: currentBook.price,
        genre: currentBook.genre,
        title: currentBook.title,
        author: currentBook.author,
        publisher: currentBook.publisher,
        description: currentBook.description,
        language: currentBook.language,
        pageCount: currentBook.pageCount,
        format: currentBook.format,
        yearOfPublication: currentBook.yearOfPublication,
        imageURL: currentBook.imageURL
    }

    const [allComments, setAllComments] = useGetAllCommentsById(book_id);
    const [currentCommentId, setCurrentCommentId] = useState('');
    const [{ commentBody }] = useGetOneComment(currentCommentId);
    const [activeButton, setActiveButton] = useState('description');

    const [inCart, setInCart] = useInCart(book_id);
    const [inFavorites, setInFavorites] = useInFavorites(book_id);

    const [showDeleteBook, setShowDeleteBook] = useState(false);
    const [showAddComment, setShowAddComment] = useState(false);
    const [showEditComment, setShowEditComment] = useState(false);
    const [showDeleteComment, setShowDeleteComment] = useState(false);

    const handleAddComment = (newComment) => {
        setAllComments(prevComments => [newComment, ...prevComments]);
        setShowAddComment(false);
    }

    const handleDeleteComment = (comment_id) => {
        setAllComments(prevComments => prevComments.filter(comment => comment._id != comment_id));
        setShowDeleteComment(false);
    }

    const handleEditComment = (updatedComment) => {
        setAllComments((prevComments) => prevComments.map((comment) =>
            comment._id == updatedComment._id ?
                updatedComment :
                comment
        ));
        setShowEditComment(false);
    }

    const editBookClickHandler = () => {
        navigate(`/edit/${book_id}`, { state: { ...initialValues } });
    }

    const deleteBookClickHandler = () => {
        setShowDeleteBook(true);
    }

    const deleteBookCloseHandler = () => {
        setShowDeleteBook(false);
    }

    const deleteCommentClickHandler = (comment_id) => {
        setCurrentCommentId(comment_id);
        setShowDeleteComment(true);
    }

    const deleteCommentCloseHandler = () => {
        setShowDeleteComment(false);
    }

    const editCommentClickHandler = (comment_id) => {
        setCurrentCommentId(comment_id);
        setShowEditComment(true);
    }

    const editCommentCloseHandler = () => {
        setShowEditComment(false);
    }

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

                                {(isAuthenticated && user_id === currentBook._ownerId) ?
                                    <div className={styles.modify_entry_div}>
                                        <Button onClick={editBookClickHandler} className={styles.modify_entry_edit}>
                                            Edit Entry
                                        </Button>
                                        <Button onClick={deleteBookClickHandler} className={styles.modify_entry_delete}>
                                            Delete Entry
                                        </Button>
                                    </div>
                                    : ''
                                }
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
                                                    Genre
                                                </td>
                                                <td className={styles.td_last}>
                                                    {currentBook.genre}
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
                            <div className="pb-2">
                                <h4 className={styles.box_cover}>{currentBook.format}</h4>
                                <p className={styles.box_available}>&#10003; Available</p>
                                {/* <p className={styles.box_unavailable}>X Unavailable</p> */}
                                <p className={styles.box_price}>Price: ${currentBook.price}</p>
                                <ul>
                                    {isAuthenticated && <li className={styles.box_li}>
                                        {inCart ?
                                            <a href="#" onClick={() => {
                                                removeFromCart(book_id);
                                                setInCart(false);
                                            }
                                            } className={styles.btn_buy}>Remove from Cart</a> :
                                            <a href="#" onClick={() => {
                                                addToCart({ ...currentBook, _bookId: book_id }, book_id);
                                                setInCart(true);
                                            }
                                            } className={styles.btn_buy}>Add to Cart</a>
                                        }
                                    </li>}
                                    {isAuthenticated && <li className={styles.box_li}>
                                        {inFavorites ?
                                            <a href="#" onClick={() => {
                                                removeFromFavorites(book_id);
                                                setInFavorites(false);
                                            }
                                            } className={styles.btn_favorites}>&#9733; REMOVE FAVORITE</a> :
                                            <a href="#" onClick={() => {
                                                addToFavorites({ ...currentBook, _bookId: book_id }, book_id);
                                                setInFavorites(true);
                                            }
                                            } className={styles.btn_favorites}>&#9733; ADD TO FAVORITES</a>
                                        }
                                    </li>}
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
                                {allComments.length > 0 ?
                                    <CommentSection comments={allComments}
                                        deleteBtnHandler={deleteCommentClickHandler}
                                        editBtnHandler={editCommentClickHandler}
                                    /> :
                                    <div className={styles.scrollable_container}>
                                        {isAuthenticated
                                            ? <p className={styles.no_comments_p}>
                                                Be The First to Leave a Comment!
                                            </p>
                                            : <Link to="/login">
                                                <p className={styles.no_comments_p}>
                                                    Be The First to Leave a Comment!
                                                </p>
                                            </Link>
                                        }

                                    </div>
                                }
                            </div>
                        }
                    </div>
                </div>
                {(activeButton == 'comments' && isAuthenticated) &&
                    <div className={styles.button_div}>
                        <Button onClick={addCommentClickHandler} className={styles.button} variant="secondary" type="submit">
                            Add Comment
                        </Button>
                    </div>
                }
            </div>

            {showDeleteBook && <DeleteBook
                onClose={deleteBookCloseHandler}
                book_id={book_id}
            />}

            {showAddComment && <AddComment
                onAddComment={handleAddComment}
                onClose={addCommentCloseHandler}
                isOpen={showAddComment}
                book_id={book_id}
                genre={currentBook.genre}
            />}

            {showDeleteComment && <DeleteComment
                onDeleteComment={handleDeleteComment}
                onClose={deleteCommentCloseHandler}
                comment_id={currentCommentId}
            />}

            {showEditComment && <EditComment
                onEditComment={handleEditComment}
                onClose={editCommentCloseHandler}
                isOpen={showEditComment}
                comment_id={currentCommentId}
                commentBody={commentBody}
                book_id={book_id}
            />}
        </>
    );
}