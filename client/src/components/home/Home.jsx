import Banner from "./banner/Banner";
import Header from "./header/Header";
import Logo from "./logo/Logo";
import NavBar from "./nav-bar/NavBar";

export default function Home() {
    return (
        <div className="banner_bg_main">
            <NavBar />

            <Logo />

            <Header />

            <Banner />
        </div>
    );
}