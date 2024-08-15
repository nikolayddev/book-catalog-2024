export function sortGenre(allBooks, genre) {
    const bookGenre = allBooks.filter((book) => book.genre === genre);
    bookGenre.sort((a, b) => b._createdOn - a._createdOn);
    return bookGenre;
}

// export async function calculateTotalPrice() {
//     const allItems = await getAllCartItems();

//     if (allItems.length <= 0) {
//         return '$0.00';
//     }

//     let sum = 0;

//     for (const item of allItems) {
//         const price = Number(item.price);
//         sum+=price;
//     }

//     return sum;
// }