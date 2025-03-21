import './App.css';
import {useState} from "react"

function App() {
 const [value,setValue]=useState(0)
 const [data,setData]=useState([])
 const [arr,setArr]=useState(["hi","hello","hey"])
console.log(data)

 const handleIncrement=()=>{
  console.log("increment")
  setValue(value+1)
  setData(arr[value])


 }

 const handleChange=(event)=>{

// return setData(event.target.value)
 }
  return (
    <div className="App">
      {/* <h1>{data}</h1> */}
    {/* <button onClick={handleIncrement}>increment</button>
    <button onClick={()=>setValue(value-1)}>decrement</button>  */}


    {/* <input type='text' value={data} onChange={handleChange}  placeholder='username'/> */}


     <h1>{arr[value]}</h1>
    <button onClick={handleIncrement}>display</button>




    </div>
  );
}

export default App;
