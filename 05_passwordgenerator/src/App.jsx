import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length,setlength]=useState(8);
  const [number,setnumber]=useState(false);
  const [character,setcharacter]=useState(false);
  const [password, setpassword]=useState("");


  const passwordref=useRef(null)


  const passwordgenerator= useCallback(() =>{
    let pass="";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str+="0123456789"
    if(character) str+="/!#$%^&*()_+"
    for(let i=1;i<=length;i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length)+1)
    }
    setpassword(pass);
  } , [length, number ,character])



   const copyPasswordToClipboard=useCallback(() => {
    window.navigator.clipboard.writeText(password)
   })


  useEffect(() =>{
    passwordgenerator()
  },[length,number,character,passwordgenerator])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-white bg-gray-700'>
      <h1 className='text-xl text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg mb-3 overflow-hidden'>
        <input type='text'
        value={password}
        className="outline-none w-full py-1 px-3 text-black"
        placeholder='password' 
        readOnly
        ref={passwordref}
        />

        {/* button to copy password */}
        <button className='text-white  bg-blue-700 px-3 py-0.5 shrink-0' onClick={(copyPasswordToClipboard)}>COPY</button>


      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={8}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) =>setlength(e.target.value)}
          />
          <label> Length: {length}</label>
        </div>
        <div>
          <input 
          type="checkbox"
          defaultChecked={number}
          onChange={() => (setnumber((prev) => !prev))}
          />
          <label>numbers</label>
        </div>
        <div>
          <input 
          type='checkbox'
          defaultChecked={character}
          onChange={()=>{
            setcharacter((prev) => !prev)
          }}
          />
          <label> character</label>
        </div>
      </div>
    </div>
  )
}
export default App
