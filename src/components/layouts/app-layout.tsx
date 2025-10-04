import { cn } from "@/lib/utils";
import { Outlet, useLocation } from "react-router";
import Footer from "../footer";
import Navbar from "../navbar";

const AppLayout = () => {
    const { pathname } = useLocation();
    const isHomePage = pathname === "/";

    return (
        <main
            className={cn("flex flex-col min-h-dvh", {
                "md:pt-10 pt-5": !isHomePage,
            })}
        >
            {!isHomePage && (
                <Navbar className="[--nav-bg:var(--color-ice-white)]" />
            )}
            <Outlet />
            <Footer className="mt-auto" />
        </main>
    );
};

export default AppLayout;
