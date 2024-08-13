import { post } from "./requester";

const BASE_URL = 'users';

export async function login(email, password) {
    const authData = await post(`${BASE_URL}/login`, { email, password });
    return authData;
}