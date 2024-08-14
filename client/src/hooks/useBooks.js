import { useEffect, useState } from "react";
import { createBook, getAll, getOne } from "../api/books-api";
import { sortGenre } from "../api/utils";

export function useGetBookGenre(genre) {
    const [bookGenre, setBookGenre] = useState([]);

    useEffect(() => {
        (async () => {
            const allBooks = await getAll();
            const filteredBooks = sortGenre(allBooks, genre);
            setBookGenre(filteredBooks);
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