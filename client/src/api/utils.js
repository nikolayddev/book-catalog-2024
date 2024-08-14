export function sortGenre(allBooks, genre) {
    const bookGenre = allBooks.filter((book) => book.genre === genre);
    return bookGenre;
}