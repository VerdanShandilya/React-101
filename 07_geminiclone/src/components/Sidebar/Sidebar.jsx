import React from 'react'
import './sidebar.css'
import { useState, useContext } from 'react'
import {assets} from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

  const [show,setshow] = useState(false);
  const {prevprompt,onSent,setrecentprompt,newChat}=useContext(Context);

  const loadprompt= async (prompt) =>{
    setrecentprompt(prompt)
    await onSent(prompt);
  }

  return (
    <div className='sidebar'>
        <div className='top'>
            <img className='menu'  onClick={()=> setshow(!show)}src={assets.menu_icon} alt=" " />
            <div className="new-chat" onClick={()=>newChat()}>
                <img src={assets.plus_icon} alt=''/>
                {show? <p>New Chat</p> : null} 
            </div>
            {show?
            <div className='recent'>
                <p className='recent-title'> Recent</p>
                {prevprompt.map((prompt) =>{
                    return(
                        <div className='recent-entry' onClick={() => loadprompt(prompt)}>
                            <img src={assets.message_icon} />
                            <p>{prompt.slice(0,18)}...</p> 
                        </div>
                    )                                       
                })}
            </div> : null
            }
        </div>
        <div className='bottom'>
            <div className='bottom-item recent-entry'>
                <img src={assets.question_icon} />
                {show?<p>Help</p> : null}
            </div>
            <div className='bottom-item recent-entry'>
                <img src={assets.history_icon} />
                {show? <p>Activity</p> : null}
            </div>
            <div className='bottom-item recent-entry'>
                <img src={assets.send_icon} />
                {show ? <p>Settings</p> : null}
            </div>
        </div>
    </div>
  )
}

export default Sidebar
