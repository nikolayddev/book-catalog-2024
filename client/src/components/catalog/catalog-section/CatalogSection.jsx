import { useEffect, useState } from "react";
import CatalogItem from "../catalog-item/CatalogItem";
import { getGenre } from "../../../api/books-api";

export default function CatalogSection({
    genre,
}) {

    const [booksGenre, setBooksGenre] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await getGenre(genre);
            setBooksGenre(result);
        })();
    }, [genre]);

    return (
        <>
            {booksGenre.map((book) => (<CatalogItem key={book._id} book={{ ...book }} />))}
        </>
    )
}