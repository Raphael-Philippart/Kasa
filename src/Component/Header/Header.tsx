import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./Header.scss";

export default function Header({ img }: { img: string }): JSX.Element {
    return (
        <header>
            <nav className="Header">
                <Logo img={img} altText="Logo Kasa" link={true} pathLink="/"/>
                <ul>
                    <li><NavLink to="/">Accueil</NavLink></li>
                    <li><NavLink to="/about">À Propos</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}
