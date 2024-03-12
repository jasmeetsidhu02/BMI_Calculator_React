
import { useState } from 'react'
import './App.css'

function App() {
const [weight,setWeight] = useState(0);
const [height,setHeight] = useState(0);
const [msg,setMsg] = useState(null);

const calculateBMI = ()=>{
  if(height==0 || weight==0)
  {
    alert("please enter a valid values");
    return;
  }

  const bmi = (weight/height*height)*703;
  setMsg("your bmi is :"+bmi)
  

}
  return (
  <><div className='container'>

  <h1>BM Calculator</h1>
  <form onSubmit={(e)=>{e.preventDefault()
      console.log("your weight is ",weight," and height is :",height);
      calculateBMI();
    }}>
  <label htmlFor='height'>Height</label>
  <input type='text' id= "height"  name="Height" placeholder='Height' value={height} onChange={(e)=>{
    setHeight( e.target.value);
  }}></input>
  <label htmlFor='weight'>weight</label>
  <input type='text'id="weight" name="weight" placeholder='weight' value={weight} onChange={(e)=>{
    setWeight( e.target.value);
  }}></input>
    <button type='submit' > submit here</button>
    </form>


    <div className='answer'>{ {msg} && <p>{msg}</p>}</div>
  </div></>
  )
}

export default App
