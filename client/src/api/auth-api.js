import { get, post } from "./requester";

const BASE_URL = 'users';

export function login(email, password) {
    const authData = post(`${BASE_URL}/login`, { email, password });
    return authData;
}

export function register(email, password, firstName, lastName, profilePicture) {
    const authData = post(`${BASE_URL}/register`, { email, password, firstName, lastName, profilePicture });
    return authData;
}

export function logout() {
   return get(`${BASE_URL}/logout`);
}

export function getUserInfo() {
    return get(`${BASE_URL}/me`);
}