"use client";

import Content from "@/app/components/common/Content";
import Image from "next/image";
import logo from "../../../../../public/img/logo.webp"
import stickyLogo from "../../../../../public/img/square.webp"
import menuIcon from "../../../../../public/img/menu.svg"
import closeIcon from "../../../../../public/img/close.svg"
import { useEffect, useState } from "react";

export default function Navigation() {
    const [isSticky, setIsSticky] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header data-sticky={ isSticky } data-menu-open={ menuOpen }>
            <Content className="header-content flex items-center justify-between">
                <Image src={ !isSticky ? logo :  stickyLogo } alt="Laurens Southgate" width={ 220 } />
                <button type="button" className="menu-button" onClick={ () => setMenuOpen(menuOpen => !menuOpen) }>
                    <Image src={ !menuOpen ? menuIcon : closeIcon } alt="Menu" width={ 32 } />
                </button>
            </Content>
        </header>
    )
}