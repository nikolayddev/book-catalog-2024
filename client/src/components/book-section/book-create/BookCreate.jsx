import Button from 'react-bootstrap/Button';
import styles from './BookCreate.module.css';

import Logo from '../../logo/Logo';
import { useRef, useEffect } from 'react';


export default function BookCreate() {

    const middleRef = useRef(null);

    useEffect(() => {
        if (middleRef.current) {
            middleRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, []);

    return (
        <>
            <Logo />
            <div className="login_container">
                <h1 className="login_title_text">Upload a Book</h1>
                <div className="fashion_section_2">
                    <div className="col-lg-12 col-sm-4">
                        <div className="box_main">
                            <form>
                                <div className='row pt-1'>
                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Title</label>
                                        <input className={styles.input} type="text" placeholder="" />
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Author</label>
                                        <input className={styles.input} type="text" placeholder="" />
                                    </div>
                                </div>

                                <div className='row pt-4' ref={middleRef}>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Publisher</label>
                                        <input className={styles.input} type="text" placeholder="" />
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Year of Publication</label>
                                        <input className={styles.input} type="number" placeholder="" />
                                    </div>
                                </div>

                                <div className='row pt-4'>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Language</label>
                                        <input className={styles.input} type="text" placeholder="" />
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Page Count</label>
                                        <input className={styles.input} type="number" placeholder="" />
                                    </div>
                                </div>

                                <div className='row pt-4'>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Format</label>
                                        <div>
                                            <select id="options" className={styles.select}>
                                                <option value="option1">Soft Cover</option>
                                                <option value="option2">Hard Copy</option>
                                                <option value="option3">Audio</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col md-3">
                                        <label className={styles.create_form_labels}>Image URL</label>
                                        <input className={styles.input} type="url" placeholder="" />
                                    </div>
                                </div>

                                <div className={styles.description}>
                                    <label className={styles.create_form_labels}>Description</label>
                                    <textarea className={styles.description_textarea} type="textarea" placeholder=""></textarea>
                                </div>
                                <div className={styles.button_div}>
                                    <Button className={styles.button} variant="secondary" type="submit">
                                        Add Book
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

