import { get, post, put, del } from './requester';

const BASE_URL = 'data/books';

export async function getAll() {
    const result = await get(BASE_URL);
    return Object.values(result);
}

export async function getOne(book_id) {
    const result = get(`${BASE_URL}/${book_id}`);
    return result;
}

export async function createBook(bookData) {
    const result = post(BASE_URL, bookData);
    return result;
}
