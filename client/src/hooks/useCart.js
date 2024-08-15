import { useEffect, useState } from "react";
import { getAll, getOne, toggleInCart } from "../api/books-api";

export function useUpdateInCart() {
    const toggleCartHandler = (book_id, data) => toggleInCart(book_id, data);

    return toggleCartHandler;
}

export function useToggleInCart(book_id) {
    const [itemInCart, setItemInCart] = useState(false);

    useEffect(() => {
        (async () => {
            const result = await getOne(book_id);
            setItemInCart(result.inCart);
        })();
    }, [book_id]);

    return [itemInCart, setItemInCart];
}

export function useGetAllCartItems() {
    const [allCartItems, setAllCartItems] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getAll();
            console.log(result);
            const filteredArr = result.filter(book => book.inCart === true);
            setAllCartItems(filteredArr);
        })();
    }, []);

    return [allCartItems, setAllCartItems];
}