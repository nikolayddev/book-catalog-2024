import { getAll } from "../../api/books-api";
import BookSection from "../catalog/book-section/BookSection";
import CarouselItem from "../catalog/book-section/Carousel";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import Logo from "./logo/Logo";

import { useEffect, useState } from "react";


export default function Home() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        (async () => {
            const allBooks = await getAll();
            setBooks(allBooks);
        })();

    }, [])

    console.log(books);

    return (
        <>
            <Logo />

            <Header />

            <Banner />

            <CarouselItem />
            
            <CarouselItem />
        </>
    );
}