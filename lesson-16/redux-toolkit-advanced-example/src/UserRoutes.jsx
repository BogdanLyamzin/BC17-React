import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const GreateHousesPage = lazy(() => import("./pages/GreateHousesPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Loading page</p>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/greate-houses" element={<GreateHousesPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;