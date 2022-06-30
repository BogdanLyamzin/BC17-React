import MyBooks from "./modules/MyBooks"
import Vote from "./modules/Vote";
import Timer from "./modules/Timer";
import Tabs from "./modules/Tabs";

import './shared/styles/common.scss';

import "./App.css"

const tabItems = [
  {
    id: "1",
    title: "Timer",
    content: <Timer />
  },
  {
    id: "2",
    title: "MyBooks",
    content: <MyBooks />
  },
]

const App = () => {
  return (
    <>
    <Tabs items={tabItems} />
    </>
  )
}

export default App;
