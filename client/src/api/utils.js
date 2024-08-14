export function sortGenre(allBooks, genre) {
    const bookGenre = allBooks.filter((book) => book.genre === genre);
    bookGenre.sort((a, b) => b._createdOn - a._createdOn);
    return bookGenre;
}