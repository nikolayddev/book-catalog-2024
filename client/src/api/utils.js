import { getUserCartItems } from "./cart-api";

export function sortGenre(allBooks, genre) {
    const bookGenre = allBooks.filter((book) => book.genre === genre);
    bookGenre.sort((a, b) => b._createdOn - a._createdOn);
    return bookGenre;
}

export const getAccessToken = () => {
    const authJson = localStorage.getItem('auth');

    if(!authJson) {
        return '';
    }

    const authData = JSON.parse(authJson);

    return authData?.accessToken;
}

export function calculateTotalPrice(cartItems) {

    if (cartItems.length <= 0) {
        return '$0.00';
    }

    let sum = 0;

    for (const item of cartItems) {
        const price = Number(item.price);
        sum+=price;
    }

    return sum;
}