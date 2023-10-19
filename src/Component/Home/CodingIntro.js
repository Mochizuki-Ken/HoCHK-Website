import React from 'react'
import './CodingIntro.css'
import Text from '../../Tools/Dictionary'
export default function CodingIntro() {
  return (
    <div className='CodingIntro_Main_Div'>
        <div className='Left'>
            <img src={require('./../../Media/WhatsApp Image 2023-08-27 at 12.04.56 AM.jpeg')}></img>
            <img src={require('./../../Media/Coding-03.jpg')}></img>
        </div>
        <div className='Right'>
            <label className='Title'>{Text('WhyCodingText')}</label>

            <article className='Intro'>
            <p>{Text('WhyCoding1')}</p>
            <p>{Text('WhyCoding2')}</p>
            <p>{Text('WhyCoding3')}</p>
            </article>

            <p className='Steve'>{Text('SteveJobs')}</p>
        </div>
    </div>
  )
}
