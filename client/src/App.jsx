import { Routes, Route } from 'react-router-dom';

import Copyright from "./components/copyright/Copyright";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NavBar from './components/nav-bar/NavBar';
import Catalog from './components/catalog/Catalog';
import BookItem from './components/book-section/BookItem';
import Details from './components/details/Details';
import BookCreate from './components/book-section/book-create/BookCreate';
import BookEdit from './components/book-section/book-create/book-edit/BookEdit';
import ShoppingCart from './components/shopping-cart/ShoppingCart';

export default function App() {
    return (
        <>

            <div className='banner_bg_main'>
                <NavBar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/index.html' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/create' element={<BookCreate />} />
                    <Route path='/my-profile' element={<BookItem />} />
                    <Route path='/details' element={<Details />} />
                    <Route path='/cart' element={<ShoppingCart />} />

                </Routes>

                <Footer />

                <Copyright />
            </div>

        </>

    );
}