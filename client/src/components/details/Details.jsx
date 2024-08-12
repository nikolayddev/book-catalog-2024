import { useEffect, useRef, useState } from "react";

import styles from './Details.module.css'
import CommentSection from "./comment-section/CommentSection";
import Button from "react-bootstrap/esm/Button";
import AddComment from "./comment-section/AddComment";

export default function Details() {

    const [activeButton, setActiveButton] = useState('description');
    const [showAddComment, setShowAddComment] = useState(false);

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
                                        <a href="#">
                                            <img
                                                src="https://www.orangecenter.bg/media/catalog/product/cache/bdc2c78f7e06003a3c29bc34b94b23a8/s/h/shogun-tom-1-9789542804437.jpg"
                                                className={styles.book_img}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div>
                                    <h2 className={styles.table_title}>Shogun</h2>
                                    <h4 className={styles.table_title_genre}>Novel</h4>
                                    <hr className={styles.hr} />
                                    <table className={styles.table}>
                                        <tbody>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Author
                                                </td>
                                                <td className={styles.td}>
                                                    James Clavell
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Publisher
                                                </td>
                                                <td className={styles.td}>
                                                    Ciela
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Date of Publication
                                                </td>
                                                <td className={styles.td}>
                                                    2010
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Page count
                                                </td>
                                                <td className={styles.td}>
                                                    610
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Format
                                                </td>
                                                <td className={styles.td}>
                                                    Paperback
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={styles.td_labels}>
                                                    Language
                                                </td>
                                                <td className={styles.td}>
                                                    Bulgarian
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
                                <h4 className={styles.box_cover}>Paperback</h4>
                                <p className={styles.box_available}>&#10003; Available</p>
                                <p className={styles.box_unavailable}>X Unavailable</p>
                                <p className={styles.box_price}>Price: $19.85</p>
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
                                <p className={styles.p_description}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum debitis unde molestias distinctio nam quae autem, harum vero. Sint, voluptatem mollitia eum quis, ducimus est tempora voluptatibus adipisci corporis officia unde. Rerum nemo expedita facere autem impedit? Aperiam reiciendis doloremque corrupti debitis quos temporibus aut vero quibusdam distinctio illo quo atque eos aspernatur quisquam deleniti maxime doloribus veniam possimus, fuga laudantium? Consectetur at officiis laborum ullam repellat iure neque deserunt blanditiis ad aperiam odio vel iste, ipsum a eius, aspernatur corporis aliquam odit. Quam sed blanditiis ducimus reprehenderit voluptates iure cumque esse ut veritatis quibusdam! Harum delectus illum minima iusto. Voluptatibus repellendus nesciunt pariatur culpa deleniti ut? Numquam est inventore voluptas molestiae, consequatur nulla doloremque recusandae tempora a eaque aperiam necessitatibus dolores fugit dolorem excepturi consectetur ducimus enim quod veritatis veniam incidunt officia perspiciatis unde? Amet ab tenetur quia. Labore neque harum eos nemo placeat nihil nostrum distinctio, quasi ducimus ratione illo et blanditiis saepe laboriosam iusto praesentium quia maiores illum recusandae. Nam necessitatibus aliquam, tempora qui nostrum exercitationem molestiae quod cumque obcaecati architecto ab ipsum nihil perspiciatis magni itaque autem fugiat asperiores minus nemo saepe non iste voluptates veniam ipsam! A ex eum odit illum necessitatibus ad tempora quod?</p>
                            </div>
                        }

                        {activeButton == 'comments' &&
                            <div className={styles.div_comments}>
                                <CommentSection />
                            </div>
                        }
                    </div>
                </div>
                <div className={styles.button_div}>
                    <Button onClick={addCommentClickHandler} className={styles.button} variant="secondary" type="submit">
                        Add Comment
                    </Button>
                </div>
            </div>

            {showAddComment && <AddComment 
            onClose={addCommentCloseHandler}
            isOpen={showAddComment}
            />}
        </>
    );
}