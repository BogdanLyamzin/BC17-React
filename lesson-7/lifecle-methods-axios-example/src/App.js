import PostList from "./modules/PostList";

import './App.css';

import posts from "./data/post-list.json";

function App() {
  return (
    <div className="App">
      <PostList /> 
    </div>
  );
}

export default App;
