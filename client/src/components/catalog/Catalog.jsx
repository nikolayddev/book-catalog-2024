import Header from "../header/Header";
import Logo from "../home/logo/Logo";
import CatalogSection from "./catalog-section/CatalogSection";
import styles from './Catalog.module.css';

export default function Catalog() {
    return (
        <div>
            <Logo />
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