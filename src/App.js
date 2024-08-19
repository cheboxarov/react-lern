import React from "react";
import './App.css';
import './header/header.css'
import Header from "./header/Header";
import Navigation from "./Navigation/Navigation";
import './Navigation/Navigation.css'
import Content from "./Content/Content";
import Footer from "./Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header />
            <Navigation />
            <Content />
            <Footer />
        </div>
    );
}

export default App;
