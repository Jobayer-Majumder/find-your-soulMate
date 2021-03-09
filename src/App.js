import Header from "./component/header/Header";
import './App.css'
import Main from "./component/main/Main";
import Data from './data.json';
import Navbar from "./component/navbar/Navbar";
import { useState } from "react";

function App() {
  let [cart, setCart] = useState([])
  const handleClick = (data) => {
    const newCart = [...cart, data]
    setCart(newCart);
  }
  return (
    <div>
      <Header></Header>
      <Navbar data={cart} count={cart.length}></Navbar>
      {
        Data.map(people => <Main handler={handleClick} data={people}></Main>)
      }
    </div>
  );
}

export default App;
