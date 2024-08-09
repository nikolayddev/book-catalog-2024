import CatalogItem from "../catalog-item/CatalogItem";
import styles from "./CatalogSection.module.css";

export default function CatalogSection({
    books,
    title,
}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.title_text}>Genre</h1>
            <div className={styles.book_section}>
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
                <CatalogItem />
            </div>
        </div>
    )
}