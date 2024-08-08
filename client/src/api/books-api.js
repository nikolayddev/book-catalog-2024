import { get, post, put, del } from './requester';

export async function getAll() {
    const result = await get('book-bazaar/books');
    return Object.values(result);
}

export async function getOne() {

}