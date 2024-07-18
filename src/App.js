// src/App.js
// import './App.css';
import { useState } from "react";


function App() {
  const [counter, setCounter] = useState(0); // 0 is the initial value 
  // console.log(counter);

  const [role, setRole] = useState("Developer"); // 'Developer' is the initial value
 

  // let role = "Developer";

  const changeColor = () => {
    // role = "Architect"
    setRole("Architect"); // 'Architect' is the new value
    // console.log(role)
  }

  // const [brand, setBrand] = useState('BMW');
  // const [model, setModel] = useState('X6');
  // const [year, setYear] = useState('2020');
  // const [color, setColor] = useState('Silver');

  const [car, setCar] = useState({
    brand: "BMW",
    model: "X6",
    year: "2020",
    color: "Silver"
  });




  return (
    <>
      <h1>Hi, I am a Software {role}</h1>
      <button onClick={changeColor}>Hire me!</button>

      <h1>My {car.brand} </h1>
      <h3>It's a {car.color} {car.model} {car.year},straight from Germany</h3>
    </>
   
  );
}

export default App;
