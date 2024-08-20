import { del, get, post } from "./requester";

const BASE_URL = 'data/favorites';

export function createFavoritesItem(bookData) {
    const result = post(BASE_URL, bookData);
    return result;
}

export async function deleteFavoritesItem(favoritesItem_id) {
    const result = await del(`${BASE_URL}/${favoritesItem_id}`);
}

export function getUserFavoritesItems(_ownerId) {
    const result = get(`${BASE_URL}?where=_ownerId%3D%22${_ownerId}%22`);
    return result;
}

export function getOneUserFavoritesItem(_itemId) {
    const result = get(`${BASE_URL}?where=_ownerId%3D%22${_itemId}%22`);
    return result;
}

export function getFavoritesItemByBookId(_bookId) {
    const result = get(`${BASE_URL}?where=_bookId%3D%22${_bookId}%22`);
    return result;
}