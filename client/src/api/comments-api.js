import { get, post } from "./requester";

const BASE_URL = 'data/comments';

export async function createComment(owner_id, name, date, info) {
    const body = { owner_id, name, date, info };
    await post(BASE_URL, body);
}

export async function getAllComments() {
    const result = await get(BASE_URL);
    const comments = Object.values(result);
    return comments;
}