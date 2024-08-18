import { del, get, post } from "./requester";

const BASE_URL = 'data/cart';

export function createCartItem(bookData) {
    const result = post(BASE_URL, bookData);
    return result;
}

export async function deleteCartItem(cartItem_id) {
    const result = await del(`${BASE_URL}/${cartItem_id}`);
}

export function getUserCartItems(_ownerId) {
    const result = get(`${BASE_URL}?where=_ownerId%3D%22${_ownerId}%22`);
    return result;
}

export function getOneUserCartItem(_itemId) {
    const result = get(`${BASE_URL}?where=_ownerId%3D%22${_itemId}%22`);
    return result;
}

export function getCartItemByBookId(_bookId) {
    const result = get(`${BASE_URL}?where=_bookId%3D%22${_bookId}%22`);
    return result;
}