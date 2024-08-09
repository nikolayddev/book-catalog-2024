import Header from "../header/Header";
import CatalogSection from "./catalog-section/CatalogSection";
import styles from './Catalog.module.css';

export default function Catalog() {
    return (
        <div>
            <div className={styles.container}>
                <h1 className={styles.catalog_text}>
                    Browse through your favorite Books!
                </h1>
            </div>
            <Header />
            <hr />
            <CatalogSection />
            <CatalogSection />
            <CatalogSection />
            <CatalogSection />
            <CatalogSection />
            <CatalogSection />
        </div>
    );
}