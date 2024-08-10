import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import ScrollToTop from './components/scroll-to-top/SrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter >
        <ScrollToTop />
        <App />
    </BrowserRouter>
)
