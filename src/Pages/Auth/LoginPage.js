import React,{useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import firebase from './../../Service/FireBaseInit'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import './LoginPage.css'
import {AuthContext} from './../../Main'
import Text from '../../Tools/Dictionary'
export default function LoginPage() {
  
  const {Auth,SetAuth}=useContext(AuthContext)

  const GoTo=useNavigate()
  
  function LoginWithGoogle(){
    const google_provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(google_provider).then((authdata)=>{
      firebase.firestore().collection('Users').doc(authdata.user.uid).get().then((data)=>{
        if(data.data()===undefined){
          firebase.firestore().collection('Users').doc(authdata.user.uid).set(
            {
              UserID:authdata.user.uid,
              UserLevel:"member",
              UserImage:"https://static.vecteezy.com/system/resources/thumbnails/006/877/567/small/work-character-solid-icon-illustration-office-workers-teachers-judges-police-artists-employees-free-vector.jpg",
              UserEmail:authdata.user.email,
              UserName:authdata.user.displayName
            }
          )
          SetAuth({...authdata.user,user_state:true})
          GoTo('/')
        }else{
          SetAuth({...data.data(),...authdata.user,user_state:true})
          GoTo('/')
        }
      })
      
      
    })
  }

  useEffect(()=>{
    if(Auth.user_state === true){
      GoTo("/account")
    }
  },[])

  return (
    <div className="LoginPage_Main_Div">

      {<>

        <div className="Login_div">
          <label className="Title" >{Text("HocHKLoginText")}</label>
          <button className="Login_btn" onClick={LoginWithGoogle}>{Text("HocHKLoginBtnText")}</button>
        </div>

        <div className="MemberIntro_div">

          <div className="Left">
            <label className='Title'>{Text("HocHKMembersText")}</label>

            <article className='Intro'>
              <p>{Text('HocHKIntro1')}</p>
              <p>{Text('HocHKIntro2')}</p>
            </article>

            <button className="btn" onClick={()=>{window.open("https://chat.whatsapp.com/Enj1YMRxBUb8ROxf4f54GL","_blank")}}>Whatsapp Community</button>
            <button className="btn" onClick={()=>{window.open("https://instagram.com/hochk.channel?igshid=MzRlODBiNWFlZA==","_blank")}}>Instagram</button>
            <button className="btn" onClick={()=>{window.open("https://www.facebook.com/hochk","_blank")}}>FaceBook</button>
            <button className="btn" onClick={()=>{window.open("https://www.youtube.com/@HourofCodeHongKong/about","_blank")}}>Youtube</button>
            <button className="btn" onClick={()=>{window.open("https://www.meetup.com/hong-kong-hour-of-code-meetup-group/","_blank")}}>meetup</button>
          </div>

          <div className="Right">
            <img src={require('./../../Media/HocHkIntro.jpg')}></img>
          </div>
          
        </div>

      </>}

    </div>
  )
}
