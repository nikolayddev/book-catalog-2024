import { getAccessToken } from "./utils";

const host = 'http://localhost:3030/';

async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    }

    const accessToken = getAccessToken();

    if (accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    if (data != undefined) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const response = await fetch(host + url, options);

    if (!response.ok) {
        const error = await response.json();
        throw error;
    }

    if (response.status == 204) {
        return response;
    } else {
        return response.json();
    }
}

const get = (url) => requester('get', url);
const post = (url, data) => requester('post', url, data);
const put = (url, data) => requester('put', url, data);
const patch = (url, data) => requester('patch', url, data);
const del = (url) => requester('delete', url);

export {
    get,
    post,
    put,
    patch,
    del
}