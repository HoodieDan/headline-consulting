import { Route, BrowserRouter as Router, Routes } from "react-router";
import AppLayout from "./components/layouts/app-layout";
import Home from "./pages/home";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route element={<AppLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default AppRoutes;
