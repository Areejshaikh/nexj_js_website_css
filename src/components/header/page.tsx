"use client";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import "../css-styles/header.css";

export const Header = () => {
    const [isNavbarVisible, setNavbarVisible] = useState(false);

    const toggleNavbar = () => {
        setNavbarVisible(!isNavbarVisible);
    };

    const closeNavbar = () => {
        setNavbarVisible(false);
    };

    return (
        <header className="header">
            <Link className="logo" href="">Areej.</Link>
            <div className="bx bx-menu" id="menu-icon" onClick={toggleNavbar}>
                <MdMenu />
            </div>
            <nav className={`navber ${isNavbarVisible ? 'active' : ''}`}>
                <Link className="Link" id="active" href="#hero" onClick={closeNavbar}>Home</Link>
                <Link className="Link" href="#about" onClick={closeNavbar}>About</Link>
                <Link className="Link" href="#education" onClick={closeNavbar}>Education</Link>
                <Link className="Link" href="#skills" onClick={closeNavbar}>Skills</Link>
                <Link className="Link" href="#contact" onClick={closeNavbar}>Contact</Link>
            </nav>
        </header>
    );
};
