import { Outlet, useLocation } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { Navbar } from "../components/Navbar"


// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    const location = useLocation();
    return (
        <ScrollToTop location={location}>
            <Navbar />
            <Outlet />
        </ScrollToTop>
    )
}