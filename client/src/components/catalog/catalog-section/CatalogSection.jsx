import { useEffect, useState } from "react";
import CatalogItem from "../catalog-item/CatalogItem";
import { useGetBookGenre } from "../../../hooks/useBooks";

export default function CatalogSection({
    genre,
}) {

    const [bookGenre] = useGetBookGenre(genre);
    console.log(bookGenre);

    return (
        <>
            {bookGenre.map((book) => (<CatalogItem key={book._id} book={{ ...book }} />))}
        </>
    )
}