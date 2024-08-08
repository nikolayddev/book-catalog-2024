import Carousel from 'react-bootstrap/Carousel';
import BookItem from './BookItem';
import styles from './Carousel.module.css';
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';


export default function CarouselItem() {
    return (
        <div className='carousel_wrapper'>
            <h1 className="fashion_taital">Insert Title Here</h1>
            <Carousel indicators={false} controls={false} id="carousel">
                <Carousel.Item className={styles.carousel_item}>
                    <BookItem />
                    <BookItem />
                    <BookItem />
                </Carousel.Item>

                <Carousel.Item className={styles.carousel_item}>
                    <BookItem />
                    <BookItem />
                    <BookItem />
                </Carousel.Item>

                <Carousel.Item className={styles.carousel_item}>
                    <BookItem />
                    <BookItem />
                    <BookItem />
                </Carousel.Item>
            </Carousel>

            <div className={styles.carousel_controls_bottom}>
                <a
                    className={styles.carousel_control_prev}
                    href="#carousel"
                    role="button"
                    onClick={() => document.querySelector('.carousel').carousel('prev')}
                >
                <i className="fa fa-angle-left" />
                </a>

                <a
                    className={styles.carousel_control_next}
                    href="#carousel"
                    role="button"
                    onClick={() => document.querySelector('.carousel').carousel('next')}
                >
                    <i className="fa fa-angle-right" />
                </a>
            </div>
        </div>
    );
}
