import { Outlet } from "react-router";
import Footer from "../footer";

const AppLayout = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
};

export default AppLayout;
