// src/App.js
// import './App.css';
import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0); // 0 is the initial value 
  console.log(counter);

  const [role, setRole] = useState("Developer");
 

  // let role = "Developer";

  const changeColor = () => {
    // role = "Architect"
    setRole("Architect");
    // console.log(role)
  }


  return (
    <>
      <h1>Hi, I am a Software {role}</h1>
      <button onClick={changeColor}>Hire me!</button>
    </>
   
  );
}

export default App;
