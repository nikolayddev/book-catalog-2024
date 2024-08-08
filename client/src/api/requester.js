const host = 'http://localhost:3030/jsonstore/';

async function requester(method, url, data) {
    const options = {
        method,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (error) {
        alert(error.message);
        throw error;
    }
}

const get = (url) => requester('get', url);
const post = (url, data) => requester('post', url, data);
const put = (url, data) => requester('put', url, data);
const del = (url) => requester('delete', url);

export {
    get,
    post,
    put,
    del
}