import React from 'react'
import { useNavigate } from 'react-router-dom'
import './JoinUsIntro.css'
import Text from '../../Tools/Dictionary'
export default function JoinUsIntro() {
  const GoTo=useNavigate()
  return (
    <div className="JoinUsIntro_Main_Div">
        <div className='Left'>
            <label className='Title'>{Text("JoinUsText")}</label>

            <article className='Intro'>
            <p>{Text("JoinUs1")}</p>
            {/* <p>{Text("JoinUs2")}</p>
            <p>{Text("JoinUs3")}</p> */}
            </article>

            <button className='UpcomingEvent_btn' >{/*onClick={()=>{GoTo('/joinus')}} */}
            {Text("JoinUsBtn")}
            </button>
        </div>

        <div className='Right'>
            <img src={require('./../../Media/Tutor-01.jpg')}></img>
            <img src={require('./../../Media/Coding-01.jpg')}></img>
        </div>
    </div>
  )
}
