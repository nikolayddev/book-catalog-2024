import { useEffect, useState } from "react";
import { createBook, deleteBook, editBook, getAll, getOne, toggleInCart } from "../api/books-api";
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

export function useGetNewestReleases() {
    const [allBooks, setAllBooks] = useState({});

    useEffect(() => {
        (async () => {
            const result = await getAll();
            result.sort((a, b) => b._createdOn - a._createdOn);
            const firstTen = result.slice(0, 10);
            setAllBooks(firstTen);
        })();
    }, []);

    return [allBooks, setAllBooks];
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

export function useDeleteBook() {
    const bookDeleteHandler = (book_id) => deleteBook(book_id);

    return bookDeleteHandler;
}

export function useUpdateBook() {
    const bookUpdateHandler = (book_id, data) => editBook(book_id, data);

    return bookUpdateHandler;
}