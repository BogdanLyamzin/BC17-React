import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

import './App.css';

import menuItems from "./data/menu-items.json"

function App() {
  return (
  <>
    <Navbar menuItems={menuItems} />
    {/* Navbar() */}
    <Main title="Page title" />
    <Footer />
  </>
  );
}

export default App;
