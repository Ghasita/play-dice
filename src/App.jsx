

import styled from "styled-components"
import Startgame from "./components/Startgame";
import './App.css'
import { useState } from "react";
import Gameplay from "./components/Gameplay";



function App() {

const [startgames,setStartgames]=useState(false);

const toggleGame=()=>{
  setStartgames((prev)=>!prev)
}
  return (
    <>
  {startgames ? <Gameplay/>:<Startgame toggle={toggleGame}/>}

    </>
  );
}

export default App
//<Button>Component2</Button>
/*const Button= styled.button`background-color:blue;

display: flex;  gap:10px; padding:15px;
margin:10px; border-radius:5px; color:white
`*/