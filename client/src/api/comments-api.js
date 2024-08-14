import { get, post } from "./requester";

const BASE_URL = 'data/comments';

export function createComment(commentData) {
    const result =  post(BASE_URL, commentData);
    return result;
}

export async function getAllComments() {
    const result = await get(BASE_URL);
    const comments = Object.values(result);
    return comments;
}