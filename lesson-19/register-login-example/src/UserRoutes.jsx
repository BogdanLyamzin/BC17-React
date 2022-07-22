import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const MyBooksPage = lazy(() => import("./pages/MyBooksPage"));
const MyFavoriteBooksPage = lazy(() => import("./pages/MyFavoriteBooksPage"));
const PostsPage = lazy(() => import("./pages/PostsPage"));
const MyFavoritePostsPage = lazy(() => import("./pages/MyFavoritePostsPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Loading page</p>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/my-books" element={<MyBooksPage />} />
                <Route path="/my-favorite-books" element={<MyFavoriteBooksPage />} />
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/my-favorite-posts" element={<MyFavoritePostsPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;