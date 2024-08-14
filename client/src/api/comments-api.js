import { del, get, post, put } from "./requester";

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

export async function deleteComment(comment_id) {
    const result = await del(`${BASE_URL}/${comment_id}`);
}

export async function editComment(comment_id, data) {
    const result = await put(`${BASE_URL}/${comment_id}`, data);
    return result;
}

export async function getOneComment(comment_id) {
    const result = await get(`${BASE_URL}/${comment_id}`);
    return result;
}