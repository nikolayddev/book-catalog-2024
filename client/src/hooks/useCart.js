import { useEffect, useState } from "react";
import { createCartItem, deleteCartItem, getCartItemByBookId, getUserCartItems } from "../api/cart-api";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export function useCreateCartItem() {
    const { user_id } = useAuthContext();

    const cartItemCreateHandler = async (cartItemData, book_id) => {

        const result = await getCartItemByBookId(book_id);
        const filterResult = result?.filter(item => item._ownerId === user_id);
        const result_ownerId = filterResult[0]?._ownerId;

        if (filterResult.length > 0 && (user_id === result_ownerId)) {
            //TODO Implement error handling to show user
            console.log('Item is already in Cart!');
            return;
        }

        createCartItem(cartItemData);
    }
    return cartItemCreateHandler;
}


export function useDeleteCartItem() {
    const { user_id } = useAuthContext();
    const navigate = useNavigate();

    const cartItemDeleteHandler = async (book_id) => {

        const result = await getCartItemByBookId(book_id);
        const filterResult = result?.filter(item => item._ownerId === user_id);
        const result_ownerId = filterResult[0]?._ownerId;
        const _cartItemId = filterResult[0]?._id;

        if (result_ownerId !== user_id) {
            //TODO Implement error handling to show user
            alert('Not Authorized wrong acc')
            navigate('/catalog');
            return;
        }

        if (_cartItemId === undefined) {
            //TODO Implement error handling to show user
            console.log('Item is not in the Cart!');
            return;
        }
        deleteCartItem(_cartItemId);
    }

    return cartItemDeleteHandler;
}

export function useGetUserCartItems() {
    const { user_id } = useAuthContext();
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getUserCartItems(user_id);
            result.sort((a, b) => b._createdOn - a._createdOn);
            setCurrentItems(result);
        })();
    }, [user_id]);

    return [currentItems, setCurrentItems];
}


export function useInCart(_bookId) {
    const { user_id } = useAuthContext();
    const [inCart, setInCart] = useState(false);

    useEffect(() => {
        (async () => {

            const result = await getCartItemByBookId(_bookId);
            const filterResult = result?.filter(item => item._ownerId === user_id);
            const result_ownerId = filterResult[0]?._ownerId;

            if (filterResult.length <= 0 || (result_ownerId !== user_id)) {
                setInCart(false);
            } else {
                setInCart(true);
            }
        })();
    }, [_bookId, user_id]);

    return [inCart, setInCart];
}