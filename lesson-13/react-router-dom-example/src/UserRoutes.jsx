import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const PostsSearchPage = lazy(() => import("./pages/PostsSearchPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const SinglePostPage = lazy(() => import("./pages/SinglePostPage"));
const CommentsPage = lazy(() => import("./pages/CommentsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

const UserRoutes = () => {
    return (
        <Suspense fallback={<p>...Loading page</p>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts-search" element={<PostsSearchPage />} />
                <Route path="/contacts" element={<ContactsPage />} />
                <Route path="/posts/:id" element={<SinglePostPage />}>
                    <Route path="comments" element={<CommentsPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Suspense>
    )
}

export default UserRoutes;