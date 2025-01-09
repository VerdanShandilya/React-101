import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [value,setvalue]=useState(0);
  const addvalue = () =>{
    setvalue(value+1);
  }
  const removevalue= () =>{
    if(value>0)
      setvalue(value-1);
  }
  return (
    <>
      <h1> React App</h1>
      <h2>
        Counter val:{value}
      </h2>
<button onClick={addvalue}>increase value</button>
      <br/>
      <button onClick={removevalue}>decrease value</button>
    </>
  )
}

export default App
