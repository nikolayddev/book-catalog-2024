import { getAll } from "../../api/books-api";
import CarouselItem from "../carousel/Carousel";
import Header from "../header/Header";
import Banner from "./banner/Banner";
import Logo from "../logo/Logo";

import { useEffect, useState } from "react";
import CarouselSimple from "../carousel/CarouselSimple";
import BookItem from "../book-section/BookItem";
import CatalogItem from "../catalog/catalog-item/CatalogItem";


const items = [
    <img src="https://via.placeholder.com/200?text=Slide+1" key='1' alt="Slide 1" />,
    <img src="https://via.placeholder.com/200?text=Slide+2" key='2' alt="Slide 2" />,
    <img src="https://via.placeholder.com/200?text=Slide+3" key='3' alt="Slide 3" />,
    <img src="https://via.placeholder.com/200?text=Slide+4" key='4' alt="Slide 4" />,
    <img src="https://via.placeholder.com/200?text=Slide+5" key='5' alt="Slide 5" />,
    <img src="https://via.placeholder.com/200?text=Slide+6" key='6' alt="Slide 6" />,
    <img src="https://via.placeholder.com/200?text=Slide+7" key='7' alt="Slide 7" />,
    <img src="https://via.placeholder.com/200?text=Slide+8" key='8' alt="Slide 8" />,
    <img src="https://via.placeholder.com/200?text=Slide+9" key='9' alt="Slide 9" />,
    <img src="https://via.placeholder.com/200?text=Slide+10" key='10' alt="Slide 10" />
];

export default function Home() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const allBooks = await getAll();
            setBooks(allBooks);
        })();

    }, [])

    return (
        <>
            <Logo />

            <Header />

            <Banner />
            <h1>SIMPLE CAROUSEL REACT</h1>
            <CarouselSimple items={items} />
            <CarouselItem />
        </>
    );
}