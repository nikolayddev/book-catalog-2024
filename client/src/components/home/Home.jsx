import BookSection from "../catalog/book-section/BookSection";
import Banner from "./banner/Banner";
import Header from "./header/Header";
import Logo from "./logo/Logo";

export default function Home() {
    return (
        <>
            <Logo />

            <Header />

            <Banner />

            <BookSection />
        </>
    );
}