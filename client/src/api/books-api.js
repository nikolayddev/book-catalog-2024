import { get, post, put, del, patch } from './requester';

const BASE_URL = 'data/books';

export async function getAll() {
    const result = await get(BASE_URL);
    return Object.values(result);
}

export async function getOne(book_id) {
    const result = get(`${BASE_URL}/${book_id}`);
    return result;
}

export function createBook(bookData) {
    const result = post(BASE_URL, bookData);
    return result;
}

export async function deleteBook(book_id) {
    const result = await del(`${BASE_URL}/${book_id}`);
}

export async function editBook(book_id, data) {
    const result = await put(`${BASE_URL}/${book_id}`, data);
    return result;
}

export async function toggleInCart(book_id, data) {
    console.log(book_id)
    console.log(data);
    const result = await put(`${BASE_URL}/${book_id}`, data);
    return result;
}