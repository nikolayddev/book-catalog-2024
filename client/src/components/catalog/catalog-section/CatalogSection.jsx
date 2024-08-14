import { useEffect, useState } from "react";
import CatalogItem from "../catalog-item/CatalogItem";
import { useGetBookGenre } from "../../../hooks/useBooks";
import CarouselSimple from "../../carousel/CarouselSimple";

export default function CatalogSection({
    genre,
}) {
    const [bookGenre] = useGetBookGenre(genre);
    const items = bookGenre.map((book) => (<CatalogItem key={book._id} book={{ ...book }} />));

    return (
        <>
            <CarouselSimple items={items}/>
        </>
    )
}