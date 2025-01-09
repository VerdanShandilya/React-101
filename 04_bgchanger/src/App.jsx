import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [currcolor,setcolor]=useState('olive')
  return (
    <>
    <div className="w-full h-screen duratin-200 bg" style={{backgroundColor: currcolor}}>
      <div className="fixed flex flexwrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 shadow-lg bg-white px-2 py-3 rounded-3xl">
          <button className="bg-red-500 rounded-3xl px-2 py-3" onClick={()=>{setcolor('red')}}>Red</button>
          <button className="bg-yellow-500 rounded-3xl px-2 py-3 " onClick={()=>{setcolor('yellow')}}>Yellow</button>
          <button className="bg-orange-500 rounded-3xl px-2 py-3" onClick={()=>{setcolor('orange')}}>Orange</button>
          <button className="bg-pink-500 rounded-3xl px-2 py-3" onClick={()=>{setcolor('pink')}}>pink</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
