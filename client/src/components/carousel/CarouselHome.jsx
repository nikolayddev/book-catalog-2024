import React, { useState } from "react";
import styles from './Carousel.module.css';

export default function CarouselHome({
    items,
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const visibleItemsCount = 4;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? items.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
    };

    const visibleItems = [];
    for (let i = 0; i < visibleItemsCount; i++) {
        visibleItems.push(items[(currentIndex + i) % items.length]);
    }

    return (
        <div className={styles.carousel_simple}>
            <div className={styles.carousel_simple_items}>
                {visibleItems.map((item, index) => (
                    <div className={styles.carousel_simple_item} key={index}>
                        {item}
                    </div>
                ))}
            </div>
            <div className="row">
                <div className={styles.carousel_simple_buttons_div}>
                    <button onClick={goToPrevious} className={styles.carousel_simple_button}>
                        <i className="fa fa-angle-left" style={{ display: "flex" }} />
                    </button>
                    <button onClick={goToNext} className={styles.carousel_simple_button}>
                        <i className="fa fa-angle-right" style={{ display: "flex" }} />
                    </button>
                </div>
            </div>
        </div>
    );
}