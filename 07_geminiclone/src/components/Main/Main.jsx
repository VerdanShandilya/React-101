import React, { useContext } from 'react'
import './Main.css'
import {assets} from '../../assets/assets'
import {Context } from '../../context/Context'

const Main = () => {

const {onSent,recentprompt,result,loading,resultdata,settext,text}=useContext(Context);

  return (
    <div className='main'>
        <div className='nav'>
            <p>Tyagigpt</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!result ?
            <>
            <div className="greet">
                <p><span>Hello, Verdan</span></p>
                <p>How can ihelp you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming read trip</p>
                    <img src={assets.compass_icon}/>
                </div>
                <div className="card">
                    <p>Summerize this concept: urban planning</p>
                    <img src={assets.bulb_icon}/>
                </div>
                <div className="card">
                    <p>Brainstorm team bonding activites for our work retreat.</p>
                    <img src={assets.message_icon}/>
                </div>
                <div className="card">
                    <p>Improve the readibility of the following code</p>
                    <img src={assets.code_icon}/>
                </div>
            </div>
            </>
            : 
            <div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt=""/>
                    <p>{recentprompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt=""/>
                    <p dangerouslySetInnerHTML={{__html:resultdata}}></p>
                </div>
            </div>
            }
            <div className="main-bottom">
                <div className="search-box">
                    <input type='text' placeholder='Enter Prompt here'  value={text} onChange={(e) => settext(e.target.value)} />    
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" onClick={ () =>onSent(text)}/>
                    </div>
                </div>
                <p className='bottom-info'>
                    TyagiGPT may display inaccurate info, including about people, so double-check it's responses.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main