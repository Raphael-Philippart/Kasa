import React from "react";
import Logo from "../Logo/Logo";
import "./Footer.scss";

export default function Footer({ img }: { img: string }): JSX.Element {
    return (
        <footer className="Footer">
            <Logo img={img} altText="Logo Kasa" link={false} pathLink="/" />
            <div>© 2020 Kasa, All rights reserved</div>
        </footer>
    );
}
