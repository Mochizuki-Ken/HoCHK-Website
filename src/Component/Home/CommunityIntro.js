import React from 'react'
import './CommunityIntro.css'
import { useNavigate } from 'react-router-dom'
import Text from '../../Tools/Dictionary'
export default function CommunityIntro() {
  const GoTo = useNavigate()
  return (
    <div className='CommunityIntro_Main_Div'>
        <div className='Left'>
            <img src={require('./../../Media/Community-01.jpg')}></img>
            <img src={require('./../../Media/Community-02.jpg')}></img>
        </div>

        <div className='Right'>
            <label className='Title'>{Text("HocHKCommunityText")}</label>

            {/* <article className='Intro'>
            <p>{Text("HocHKCommunity1")}</p>
            <p></p>
            <p></p>
            </article> */}
            
            <button className='Joincommunity_btn' onClick={()=>{GoTo('/community')}}>
                {Text('JoinCommunityBtn')}
            </button>
        </div>
    </div>
  )
}
