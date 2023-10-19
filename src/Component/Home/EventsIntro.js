import React from 'react'
import './EventsIntro.css'
import { useNavigate } from 'react-router-dom'
import Text from '../../Tools/Dictionary'
export default function EventsIntro() {
    const GoTo = useNavigate()
  return (
    <div className='EventsInTro_Main_Div'>
        <div className='Left'>
            <label className='Title'>{Text('OurEventText')}</label>

            <article className='Intro'>
            <p>{Text('OurEvent1')}</p>
            <p>{Text('OurEvent2')}</p>
            <p>{Text('OurEvent3')}</p>
            </article>

            <button className='UpcomingEvent_btn' onClick={()=>{window.open("https://www.meetup.com/hong-kong-hour-of-code-meetup-group/")}}>
                {Text('UpComingEventBtn')}
            </button>
        </div>

        <div className='Right'>
            <img src={require('./../../Media/lesson-01.jpg')}></img>
            <img src={require('./../../Media/lesson-02.jpg')}></img>
        </div>

    </div>
  )
}
