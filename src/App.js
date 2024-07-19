// src/App.js
// import './App.css';
import { useState, useEffect } from "react";


function App() {

  // useState

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

  const changeCarColor = () =>{
    setCar((prev) => {
      return {...prev, color: "blue"}
    })
  }


  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // setCount(count+1);
    setCount((prev) => prev + 1 );

    
  }

  const decreaseCount = () => {
    setCount((prev) => prev -1)
  }

  // UseEffect
  // useEffect(callback, [dependecy])
  // useEffect(callback, [])
  // useEffect(callback)

  const [cout, setCout] = useState(0);

  // useEffect without dependencies
  useEffect(() => {
    setTimeout(()=>{
      setCout((cout) => cout+1)
    },2000)
  })








  return (
    <>
      {/* <h1>Hi, I am a Software {role}</h1>
      <button onClick={changeColor}>Hire me!</button>

      <h1>My {car.brand} </h1>
      <h3>It's a {car.color} {car.model} {car.year},straight from Germany</h3>
      <button onClick={changeCarColor}>Buy</button>

      <h1>Count: {count} </h1>
      <button onClick={increaseCount}>Add</button>
      <button onClick={decreaseCount}>Remove</button> */}

      <h1>I have rendered {cout} times</h1>
    </>
   
  );
}

export default App;
