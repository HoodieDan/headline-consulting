import { Route, BrowserRouter as Router, Routes } from "react-router";
import AppLayout from "./components/layouts/app-layout";
import ScrollToTop from "./components/scroll-to-top";
import Home from "./pages/home";
import OurServices from "./pages/our-services";
import AboutUs from "./pages/about-us";
import ContactUs from "./pages/contact-us";

const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Home />} />
                    <Route path="our-services" element={<OurServices />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="contact-us" element={<ContactUs />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
