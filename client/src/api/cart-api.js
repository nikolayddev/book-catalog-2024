import { del, get, post } from "./requester";

const BASE_URL = 'data/cart';

export function createCartItem(bookData) {
    const result = post(BASE_URL, bookData);
    return result;
}

export async function deleteCartItem(book_id) {
    const result = await del(`${BASE_URL}/${book_id}`);
}

export async function getUserCartItems(_ownerId) {
    const result = get(`${BASE_URL}?where=_ownerId%3D%22${_ownerId}%22`);
    return result;
}