import {Routes, Route} from "react-router-dom";

import Header from "./modules/Header";

import HomePage from "./pages/HomePage";
import PostsSearchPage from "./pages/PostsSearchPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage";
import SinglePostPage from "./pages/SinglePostPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts-search" element={<PostsSearchPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/posts/:id" element={<SinglePostPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
