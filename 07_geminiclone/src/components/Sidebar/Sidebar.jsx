import React from 'react'
import './sidebar.css'
import { useState } from 'react'
import {assets} from '../../assets/assets'

const Sidebar = () => {

    const [show,setshow] = useState(false);
  return (
    <div className='sidebar'>
        <div className='top'>
            <img className='menu'  onClick={()=> setshow(!show)}src={assets.menu_icon} alt=" " />
            <div className="new-chat">
                <img src={assets.plus_icon} alt=''/>
                {show? <p>New Chat</p> : null} 
            </div>
            {show?
            <div className='recent'>
                <p className='recent-title'> Recent</p>
                <div className='recent-entry'>
                    <img src={assets.message_icon} />
                    <p>what is react?</p>
                </div>
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
