import React,{useState,createContext,useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/AboutPage'
import CommunityPage from './Pages/Community/CommunityPage'
import NavBar from './Component/NavBar/NavBar'
import './Main.css'
import EventsPage from './Pages/Events/EventsPage'
import LoginPage from './Pages/Auth/LoginPage'
import ContactPage from './Pages/About/ContactPage'
import JoinUsPage from './Pages/JoinUs/JoinUsPage'
import firebase from './Service/FireBaseInit'
import 'firebase/compat/auth'
import AccountPage from './Pages/Auth/AccountPage'
import PostNews from './Pages/Community/PostNews'
import PostEvent from './Pages/Events/PostEvent'
import Attend from './Pages/Events/Attend'
import LanguageBtn from './Component/NavBar/LanguageBtn'

export const AuthContext=createContext(null)
export default function Main() {
  const [Auth,SetAuth]=useState({user_state:false})
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      if  (user){
        firebase.firestore().collection('Users').doc(user.uid).get().then((data)=>{
          SetAuth({...data.data(),...user,user_state:true})
          console.log(data.data())
        })
        
      }else{
        SetAuth({user_state:false})
      }
    })
  },[])
  
  return (
    <BrowserRouter>
      
      {/* <div id='Body'> */}
      <AuthContext.Provider  value={{Auth,SetAuth}}>
      <NavBar />
      <LanguageBtn/>

        <Routes >
          
            <Route element={<CommunityPage/>} path='/community'/>
            <Route element={<About/>} path='/about'/>
            <Route element={<LoginPage/>} path='/login' />
            <Route element={<ContactPage/>} path='/contact' />
            <Route element={<JoinUsPage/>} path='/joinus' />
            { Auth.user_state && <Route element={<AccountPage/>} path='/account' />}
            { Auth.user_state && (Auth.UserLevel === "tutor" || Auth.UserLevel === "admin") && <Route element={<EventsPage/>}  path='/events'/>}
            { Auth.user_state && (Auth.UserLevel === "tutor" || Auth.UserLevel === "admin")  && <Route element={<EventsPage />} path='/tutor_event' />}
            { Auth.user_state && Auth.UserLevel === "admin" && <Route element={<PostNews/>} path='/admin_post_news' />}
            { Auth.user_state && Auth.UserLevel === "admin" && <Route element={<PostNews type={'edit'}/>} path='/admin_update_post/:pid' />}
            { Auth.user_state && Auth.UserLevel === "admin" && <Route element={<PostEvent/>} path='/admin_post_event' />}
            { Auth.user_state && Auth.UserLevel === "admin" && <Route element={<PostEvent type={'edit'}/>} path='/admin_update_event/:pid' />}
            {Auth.user_state && <Route element={<Attend/>} path='/attend/:eid' />}
            {!Auth.user_state && <Route element={<LoginPage/>} path='/attend/:eid' />}
            <Route element={<Home/>} path='*'/>
          
        </Routes>
      </AuthContext.Provider>
      {/* </div> */}
    </BrowserRouter>
  )
}
