import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../View/Layout/Layout";
import Home from "../View/Home/Home";
import About from "../View/About/About";
import Lease from "../View/Lease/Lease";
import NotFound from "../View/404/404";
import React from "react";
import "./App.scss";

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home /> }/>
                    <Route path="location/:id" element={<Lease />} />
                    <Route path="about" element={<About />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
