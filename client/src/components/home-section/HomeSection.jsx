import BannerSection from "./banner-section/BannerSection";
import HeaderSection from "./header-section/HeaderSection";
import Logo from "./logo/Logo";
import NavBar from "./nav-bar/NavBar";

export default function HomeSection() {
    return (
        <div className="banner_bg_main">
            <NavBar />

            <Logo />

            <HeaderSection />

            <BannerSection />
        </div>
    );
}