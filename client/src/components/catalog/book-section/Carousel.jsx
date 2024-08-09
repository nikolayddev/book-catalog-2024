import Carousel from 'react-bootstrap/Carousel';
import BookItem from './BookItem';
import styles from './Carousel.module.css';
import { useState } from 'react';


export default function CarouselItem() {

    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handlePrev = () => {
        const newIndex = activeIndex === 0 ? 2 : activeIndex - 1;
        setDirection('prev');
        setActiveIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = activeIndex === 2 ? 0 : activeIndex + 1;
        setDirection('next');
        setActiveIndex(newIndex);
    };

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    }

    return (
        <div className={styles.carousel_wrapper}>
            <h1 className={styles.title_text}>Insert Title Here</h1>
            <Carousel
                activeIndex={activeIndex}
                onSelect={handleSelect}
                indicators={false}
                controls={false}
                direction={direction}
                interval={2000}
            >
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
                <button
                    className={styles.carousel_control_prev}
                    onClick={handlePrev}

                >
                    <i className="fa fa-angle-left" style={{ display: "flex" }} />
                </button>

                <button
                    className={styles.carousel_control_next}
                    onClick={handleNext}
                >
                    <i className="fa fa-angle-right" style={{ display: "flex" }} />
                </button>
            </div>
        </div>
    );
}