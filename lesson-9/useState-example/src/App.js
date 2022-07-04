import Vote from "./modules/Vote";
import ToggleButton from "./shared/components/ToggleButton";
import HeaderMenu from "./modules/HeaderMenu";
import MyBooks from "./modules/MyBooks";

import './App.css';

import menuItems from "./data/menu.json"

function App() {
  return (
    <div className="App">
      {/* <Vote /> */}
      {/* <ToggleButton text="Click me" /> */}
      {/* <HeaderMenu items={menuItems} /> */}
      <MyBooks />
    </div>
  );
}

export default App;
