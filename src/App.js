import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import NavPage from "./Navigation/navPage";
import Route from "react-router-dom/es/Route";
import Container from "./Pages/Container";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <NavPage/>
                <Route path="/" component={Container}/>
            </div>
        </BrowserRouter>
    )
}


export default App;
