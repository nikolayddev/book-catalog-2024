import { useEffect, useState } from "react";
import { getGenre, getOne } from "../api/books-api";

export function useGetBookGenre(genre) {
    const [bookGenre, setBookGenre] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getGenre(genre);
            setBookGenre(result);
        })();
    }, [genre]);

    return [bookGenre, setBookGenre];
}

export function useGetOneBook(genre, book_id) {
    const [currentBook, setCurrentBook] = useState({});

    useEffect(() => {
        (async () => {
            const result = await getOne(genre, book_id);
            setCurrentBook(result);
        })();
    }, [genre, book_id]);

    return [currentBook, setCurrentBook];
}