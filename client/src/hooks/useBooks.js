import { useEffect, useState } from "react";
import { createBook, getGenre, getOne } from "../api/books-api";

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

export function useGetOneBook(book_id) {
    const [currentBook, setCurrentBook] = useState({});

    useEffect(() => {
        (async () => {
            const result = await getOne(book_id);
            setCurrentBook(result);
        })();
    }, [book_id]);

    return [currentBook, setCurrentBook];
}

export function useCreateBook() {
    const bookCreateHandler = (bookData) => createBook(bookData);

    return bookCreateHandler;
}