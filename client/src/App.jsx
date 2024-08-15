import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Copyright from "./components/copyright/Copyright";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import NavBar from './components/nav-bar/NavBar';
import Catalog from './components/catalog/Catalog';
import Details from './components/details/Details';
import BookCreate from './components/book-section/book-create/BookCreate';
import ShoppingCart from './components/shopping-cart/ShoppingCart';
import MyProfile from './components/my-profle/MyProfile';
import AuthContext from './contexts/UserContext';
import Logout from './components/logout/Logout';
import BookEdit from './components/book-section/book-edit/BookEdit';

export default function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        localStorage.setItem('accessToken', state.accessToken);
        setAuthState(state);
    };

    const removeAuthState = () => {
        localStorage.clear();
        setAuthState({});
    }

    const contextData = {
        user_id: authState._id,
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
        removeAuthState
    };

    return (
        <AuthContext.Provider value={contextData}>

            <div className='banner_bg_main'>
                <NavBar />

                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/index.html' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/catalog' element={<Catalog />} />
                    <Route path='/create' element={<BookCreate />} />
                    <Route path='/edit/:id' element={<BookEdit />} />
                    <Route path='/my-profile' element={<MyProfile />} />
                    <Route path='/catalog/:genre/:id' element={<Details />} />
                    {/* <Route path='/cart' element={<ShoppingCart />} /> */}
                    <Route path='/logout' element={<Logout />} />
                </Routes>

                <Footer />
                <Copyright />
            </div>
        </AuthContext.Provider>

    );
}