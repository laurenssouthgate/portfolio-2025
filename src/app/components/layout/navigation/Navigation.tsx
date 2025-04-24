"use client";

import Content from "@/app/components/common/Content";
import Image from "next/image";
import logo from "../../../../../public/img/logo.webp"
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
        <header data-sticky={ isSticky }>
            <Content className="header-content flex items-center justify-between">
                <div className="flex items-center gap-5">
                    <Image src={ logo } alt="Laurens Southgate" width={ 60 } />
                    <div className="column">
                        <span className="name">Laurens Southgate</span>
                        <div className="hr"></div>
                        <span className="profession">Web Developer</span>
                    </div>
                </div>
                <button type="button">

                </button>
            </Content>
        </header>
    )
}