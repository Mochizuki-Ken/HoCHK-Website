import React,{useState,useContext} from 'react'
import './NavBar.css'
import { Link,useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Main'
import Text from '../../Tools/Dictionary'
export default function NavBar() {

  const {Auth}=useContext(AuthContext)

  const GoTo=useNavigate()

  return (
    <div className='NavBar_Main_Div'>

        <img className='NavBar_Logo_Image' src={require('../../Media/hochk_logo-01.png')} onClick={()=>{GoTo('/')}}></img>
        
        <div className='scroll_div'>

        {Auth.user_state&&<Link className='link' to={'/account'}>Account</Link>}
          <Link className='link' to={'/about'}>{Text("NavAbout")}</Link>
          <Link className='link' to={'/community'}>{Text("NavCommunity")}</Link>
          {Auth.user_state&&<Link className='link' to={"/events"} >{Text("NavEvents")}</Link>}
          {!Auth.user_state&&<Link className='link' onClick={()=>{window.open('https://www.meetup.com/hong-kong-hour-of-code-meetup-group/')}} >{Text("NavEvents")}</Link>}
          

          {/* <Link className='link' to={'/contact'}>{Text("NavContact")}</Link> */}
          {/* {Auth.user_state && <Link className="Login_btn" to={'/account'}>{Text("NavAccount")}</Link>}
          {!Auth.user_state && <Link className="Login_btn" to={'/login'}>{Text("NavLogin")}</Link>} */}
        
        </div>

    </div>
  )
}

