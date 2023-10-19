import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import './IntroSlide.css'
export default function IntroSlide({In,title,p1,p2,p3,imgurl1,imgurl2,btnText,path,backgroundColor,btn_color}) {
    const GoTo=useNavigate()
    if(In==="left"){
        return (
            <div className='LeftInIntro_Main_Div' style={{backgroundColor:`${backgroundColor}`}}>
                <div className='Left'>
                    <label className='Title'>{title}</label>

                    <article className='Intro'>
                        <p>{p1}</p>
                        <p>{p2}</p>
                        <p>{p3}</p>
                    </article>

                    <button id="slide_btn" style={{backgroundColor:`${btn_color}`}}   onClick={()=>{GoTo(path)}}>
                        {btnText}
                    </button>
                </div>

                <div className='Right'>
                    {imgurl1&&imgurl1!=="?"&&<img src={imgurl1}></img>}
                    {imgurl2&&imgurl2!=="?"&&<img src={imgurl2}></img>}

                    {imgurl1=="?"&&<img src={require('../../Media/WhatsApp Image 2023-08-26 at 6.42.39 PM.jpeg')}></img>}
                    {imgurl2=="?"&&<img src={require('../../Media/WhatsApp Image 2023-08-26 at 6.42.40 PM.jpeg')}></img>}
                </div>

            </div>
        )
    }else{
        return(
            <div className='RightInIntro_Main_Div' style={{backgroundColor:`${backgroundColor}`}}>
                <div className='Left'>
                    {imgurl1&&<img src={imgurl1}></img>}
                    {imgurl2&&<img src={imgurl2}></img>}

                    
                </div>

                <div className='Right'>
                    <label className='Title'>{title}</label>

                    <article className='Intro'>
                        <p>{p1}</p>
                        <p>{p2}</p>
                        <p>{p3}</p>
                    </article>
                    
                    <button id="slide_btn" style={{backgroundColor:`${btn_color}`}} onClick={()=>{GoTo(path)}}>
                        {btnText}
                    </button>
                </div>
            </div>
        )
    }
  
}
