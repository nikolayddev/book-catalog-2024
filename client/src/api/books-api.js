import { get, post, put, del } from './requester';

const BASE_URL = 'jsonstore/book-bazaar/books';

export async function getAll() {
    const result = await get(BASE_URL);
    return Object.values(result);
}

export async function getGenre(genre) {
    const result = await get(`${BASE_URL}/${genre}`);
    return Object.values(result);
}

export async function getOne(genre, book_id) {
    const result = await get(`${BASE_URL}/${genre}/${book_id}`);
    return result;
}