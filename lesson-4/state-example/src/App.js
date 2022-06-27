import HeaderMenu from './components/HeaderMenu';
import ToggleButton from "./components/ToggleButton";
import Vote from './components/Vote';

import './App.css';

import menuItems from "./data/menu.json";

function App() {
  return (
    <div className="App">
      <Vote />
      {/* <HeaderMenu items={menuItems} /> */}
    {/* const props = {
          items: menuItems
      }
    const obj1 = new HeaderMenu(props);
    obj1.render()
     */}
     {/* <ToggleButton text="Click me" /> */}
    </div>
  );
}

export default App;
