import { useEffect, useState } from "react";
import { useAuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { createFavoritesItem, deleteFavoritesItem, getFavoritesItemByBookId, getUserFavoritesItems } from "../api/favorites-api";

export function useCreateFavoritesItem() {
    const { user_id } = useAuthContext();

    const favoritesItemCreateHandler = async (favoritesItemData, book_id) => {

        const result = await getFavoritesItemByBookId(book_id);
        const filterResult = result?.filter(item => item._ownerId === user_id);
        const result_ownerId = filterResult[0]?._ownerId;

        if (filterResult.length > 0 && (user_id === result_ownerId)) {
            //TODO Implement error handling to show user
            console.log('Item is already in Favorites!');
            return;
        }

        createFavoritesItem(favoritesItemData);
    }
    return favoritesItemCreateHandler;
}


export function useDeleteFavoritesItem() {
    const { user_id } = useAuthContext();
    const navigate = useNavigate();

    const favoritesItemDeleteHandler = async (book_id) => {

        const result = await getFavoritesItemByBookId(book_id);
        const filterResult = result?.filter(item => item._ownerId === user_id);
        const result_ownerId = filterResult[0]?._ownerId;
        const _favoritesItemId = filterResult[0]?._id;

        if (result_ownerId !== user_id) {
            //TODO Implement error handling to show user
            alert('Not Authorized wrong acc')
            navigate('/');
            return;
        }

        if (_favoritesItemId === undefined) {
            //TODO Implement error handling to show user
            console.log('Item is not in Favorites!');
            return;
        }
        deleteFavoritesItem(_favoritesItemId);
    }

    return favoritesItemDeleteHandler;
}

export function useGetUserFavoritesItems() {
    const { user_id } = useAuthContext();
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getUserFavoritesItems(user_id);
            result.sort((a, b) => b._createdOn - a._createdOn);
            setCurrentItems(result);
        })();
    }, [user_id]);

    return [currentItems, setCurrentItems];
}


export function useInFavorites(_bookId) {
    const { user_id } = useAuthContext();
    const [inFavorites, setInFavorites] = useState(false);

    useEffect(() => {
        (async () => {

            const result = await getFavoritesItemByBookId(_bookId);
            const filterResult = result?.filter(item => item._ownerId === user_id);
            const result_ownerId = filterResult[0]?._ownerId;

            if (filterResult.length <= 0 || (result_ownerId !== user_id)) {
                setInFavorites(false);
            } else {
                setInFavorites(true);
            }
        })();
    }, [_bookId, user_id]);

    return [inFavorites, setInFavorites];
}