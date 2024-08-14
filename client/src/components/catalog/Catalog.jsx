import CatalogSection from "./catalog-section/CatalogSection";
import styles from './Catalog.module.css';

export default function Catalog() {

    const genres = ['Science-Fiction', 'Adventure', 'Fantasy', 'Thriller'];

    return (
        <div>

            <div className="mt-3">
                {genres.map((genre) => (
                    <div key={genre.toLowerCase()} className={styles.container}>
                        <h1 className={styles.title_text}>{genre}</h1>
                        <div className={styles.book_section}>
                            <CatalogSection genre={genre.toLowerCase()} />
                        </div>
                    </div>
                ))};
            </div>
        </div>
    );
}