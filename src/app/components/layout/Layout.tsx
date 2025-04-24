import {ReactNode} from "react";
import './Layout.module.css'
import Navigation from "@/app/components/layout/navigation/Navigation";
import Footer from "@/app/components/layout/footer/Footer";

type LayoutProps = {
    children: ReactNode
}
export default function Layout({ children } : LayoutProps) {
    return (
        <>
            <Navigation />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}