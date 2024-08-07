import CopyrightSection from "./components/copyright-section/CopyrightSection";
import FashionSection from "./components/fashion-section/FashionSection";
import FooterSection from "./components/footer-section/FooterSection";
import HomeSection from "./components/home-section/HomeSection";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

export default function App() {
    return (
        <>
            <HomeSection />

            <FashionSection />

            <FashionSection />

            <FashionSection />

            <FooterSection />

            <CopyrightSection />

            <Login />

            <Register />
        </>

    );
}