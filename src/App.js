import React from "react";
import './App.css';
import './Components/header/Header.module.css'
import Header from "./Components/header/Header";
import Navigation from "./Components/Navigation/Navigation";
import './Components/Navigation/Navigation.css'
import Footer from "./Components/Footer/Footer";
import DialogsSection from "./Components/DialogsSection/DialogsSection";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ProfileSection from "./Components/ProfileSection/ProfileSection";

function App({store}) {
    return (
        <Router>
            <div className="App">
                <Header />
                <Navigation />
                <Routes>
                    <Route path="/" element={<ProfileSection profile={store.state.profile} dispatch={store.dispatch.bind(store)} />}/>
                    <Route path="/profile" element={<ProfileSection profile={store.state.profile} dispatch={store.dispatch.bind(store)} />}/>
                    <Route path="/messages/:id" element={<DialogsSection messages={store.state.dialogsWindow} />}/>
                    <Route path="/messages" element={<DialogsSection messages={store.state.dialogsWindow} />}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
