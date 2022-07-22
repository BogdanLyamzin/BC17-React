import { useEffect } from "react";
import {useDispatch} from "react-redux";

import { getCurrent } from "./redux/auth/auth-operations";

import UserRoutes from "./UserRoutes";

import Header from "./modules/Header";

import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(getCurrent());
  }, []);
  
  return (
    <div className="App">
      <Header />
      <UserRoutes />
    </div>
  );
}

export default App;
