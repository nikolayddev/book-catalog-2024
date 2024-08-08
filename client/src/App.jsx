import Copyright from "./components/copyright/Copyright";
import FashionSection from "./components/fashion-section/FashionSection";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

export default function App() {
    return (
        <>
            <Home />
            
            <FashionSection />

            <FashionSection />

            <FashionSection />

            <Footer />

            <Copyright />

            <Login />

            <Register />
        </>

    );
}