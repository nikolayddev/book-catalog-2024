import { useEffect, useState } from "react";
import { createCartItem, deleteCartItem, getCartItemByBookId, getOneUserCartItem, getUserCartItems } from "../api/cart-api";

export function useCreateCartItem() {
    const cartItemCreateHandler = async (cartItemData, book_id) => {

        const result = await getCartItemByBookId(book_id);

        if (result.length > 0) {
            //TODO Implement error handling to show user
            console.log('Item is already in Cart!');
            return;
        }

        createCartItem(cartItemData);
    }
    return cartItemCreateHandler;
}

export function useDeleteCartItem() {
    const cartItemDeleteHandler = async (book_id) => {

        const result = await getCartItemByBookId(book_id);

        const _cartItemId = result[0]?._id;

        if (_cartItemId === undefined) {
            //TODO Implement error handling to show user
            console.log('Item is not in the Cart!');
            return;
        }
        deleteCartItem(_cartItemId);
    }

    return cartItemDeleteHandler;
}

export function useGetUserCartItems(_ownerId) {
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getUserCartItems(_ownerId);
            setCurrentItems(result);
        })();
    }, [_ownerId]);

    return [currentItems, setCurrentItems];
}

export function useInCart(_itemId) {
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        (async () => {
            const result = await getOneUserCartItem(_itemId);
            setInCart(result);
        })();
    }, [_itemId]);

    return [inCart, setInCart];
}