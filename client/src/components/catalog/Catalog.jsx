import Header from "../header/Header";
import CatalogSection from "./catalog-section/CatalogSection";
import styles from './Catalog.module.css';

export default function Catalog() {
    return (
        <>
            <Header />
            <CatalogSection />
            <CatalogSection />
        </>
    );
}