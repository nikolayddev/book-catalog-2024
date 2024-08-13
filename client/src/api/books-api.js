import { get, post, put, del } from './requester';

export async function getAll() {
    const result = await get('book-bazaar/books');
    return Object.values(result);
}

export async function getGenre(genre) {
    const result = await get(`book-bazaar/books/${genre}`);
    return Object.values(result);
}

export async function getOne(genre, book_id) {
    const result = await get(`book-bazaar/books/${genre}/${book_id}`);
    return result;
}