import { useEffect, useState } from "react";
import { getAll, getOne, toggleFavorites } from "../api/books-api";

export function useUpdateFavorites() {
    const toggleUpdateHandler = (book_id, data) => toggleFavorites(book_id, data);

    return toggleUpdateHandler;
}

export function useToggleFavorites(book_id) {
    const [itemInFavorites, setItemInFavorites] = useState(false);

    useEffect(() => {
        (async () => {
            const result = await getOne(book_id);
            setItemInFavorites(result.inFavorites);
        })();
    }, [book_id]);

    return [itemInFavorites, setItemInFavorites];
}

export function useGetAllFavoritesItems() {
    const [allFavoritesItems, setAllFavoritesItems] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getAll();
            const filteredArr = result.filter(book => book.inFavorites === true);
            setAllFavoritesItems(filteredArr);
        })();
    }, []);

    return [allFavoritesItems, setAllFavoritesItems];
}