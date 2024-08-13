import { getAll } from "../../api/books-api";
import CarouselItem from "../carousel/Carousel";
import Header from "../header/Header";
import Banner from "./banner/Banner";
import Logo from "../logo/Logo";

import { useEffect, useState } from "react";


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

            <CarouselItem />

            <CarouselItem />
        </>
    );
}