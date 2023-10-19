import React from 'react'
import { useNavigate } from 'react-router-dom'
import './FirstHocIntro.css'
import Text from '../../Tools/Dictionary'
// import { GoTo } from '../../Tools/Tools'
export default function FirstHocIntro() {
  const GoTo=useNavigate()
  return (
    <div className='FirstHocIntro_Main_Div'>
        {/* <video autoPlay onClick={(e)=>{e.target.play()}}>
          <source type='video/mp4'  src={require("../../Media/HourofCode-WORLDWIDE.mp4")}/>
        </video> */}
        <div className='top'>
          <img className='logo'src={require('../../Media/hochk_logo-01.png')} />
          <img className='logo'src={'https://template.cityu.edu.hk/template/logo/ee/ee_logo_eng_cmyk.svg'} />
          {/* <img className='logo2'src={require('../../Media/AI Lab Logo 10.10.2023.png')} /> */}
        </div>

        <div className='First_Intro_div'>

        <div className='Left'>
          <label className='Hoc_Tittle'>{Text('HourofCodehk')}</label>

          <article className='First_Intro'>
            <p>{Text('ShortBio1')}</p>
            <p>{Text('ShortBio2')}</p>
            <p ></p>
          </article>
        </div>

        <div className='Right'>
          {/* <button onClick={()=>{GoTo('/login')}}>
            {Text("BecomeMemberBtn")}
          </button> */}
          <button onClick={()=>{GoTo('/about')}}>
            {Text("MoreAboutBtn")}
          </button>
        </div>
        

        </div>
    </div>
  )
}
