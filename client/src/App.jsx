import { Routes, Route } from 'react-router-dom';

import Copyright from "./components/copyright/Copyright";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NavBar from './components/nav-bar/NavBar';
import Catalog from './components/catalog/Catalog';

export default function App() {
    return (
        <>
            <div className="banner_bg_main">

                <NavBar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/' element={<Home />} />

                </Routes>

                <Footer />

                <Copyright />
            </div>

        </>

    );
}