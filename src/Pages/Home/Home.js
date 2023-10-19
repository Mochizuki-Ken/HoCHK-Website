import React from 'react'
import './Home.css'
import FirstHocIntro from '../../Component/Home/FirstHocIntro'
import CodingIntro from '../../Component/Home/CodingIntro'
import EventsIntro from '../../Component/Home/EventsIntro'
import CommunityIntro from '../../Component/Home/CommunityIntro'
import SupportersIntro from '../../Component/Home/SupportersIntro'
import JoinUsIntro from '../../Component/Home/JoinUsIntro'
import SponsorsIntro from '../../Component/Home/SponsorsIntro'
export default function Home() {
  return (
    <div className='Home_Main_Div'>
      <FirstHocIntro/>
      <CodingIntro/>
      <EventsIntro/>
      <CommunityIntro/>
      <JoinUsIntro/>
      <SupportersIntro/>
      <SponsorsIntro/>
    </div>
  )
}
