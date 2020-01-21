import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavPage from "./Navigation/navPage";
import Container from "./Pages/Container";

function App() {
    return (
        <div className="app">
            <NavPage/>
            <Container/>
        </div>
    )
}


export default App;
