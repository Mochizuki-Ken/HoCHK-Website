import React,{useState,useEffect} from 'react'
import './AdminAccount.css'
import { useNavigate } from 'react-router-dom'
import firebase from './../../Service/FireBaseInit'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

export default function AdminAccount({Auth}) {

  const GoTo = useNavigate()

  const [Datas,SetDatas] = useState([])

  const [SearchText,SetSearchText] = useState("")

  function Serach(){
    firebase.firestore().collection('Users')
      .where("UserEmail",'==',SearchText)
      .onSnapshot((datas)=>{
          let Datas = datas.docs.map((data)=>{
            return({...data.data(),id:data.id})
          })
          console.log(Datas)
          SetDatas(Datas)
      })
  }

  function UpDate(level,id){
    firebase.firestore().collection('Users').doc(id).update({
      UserLevel:level
    })
  }


  return (
    <div className='AdminAccount_Main_Div'>

      <button className='LogOut_btn' onClick={()=>{firebase.auth().signOut()}}>LogOut</button>

      <div className='Option_div'>

        <button onClick={()=>{GoTo('/admin_post_event')}}>NewEvent</button>

        <button onClick={()=>{GoTo('/admin_post_news')}}>NewPost</button>

        
      </div>

      <div className='Work_div'>

        <div className='Search_div'>
          <input value={SearchText} placeholder=' user gamil :' onChange={(e)=>{SetSearchText(e.target.value)}} />
          <button onClick={()=>{Serach()}}>Search</button>
        </div>


        <div className='list_div'>

          {
            Datas.map((e)=>{
              return(
                <div className='user_div'>

                <img src={e.UserImage}/>

                <div>
                  <label>Name : {e.UserName}</label>
                  <label>Email  : {e.UserEmail}</label>
                  <label>ID : {e.UserID}</label>
                </div>
                
                <label>Account : {e.UserLevel}</label>

                <div>
                  <button onClick={()=>{UpDate("admin",e.id)}}>Admin</button>
                  <button onClick={()=>{UpDate("tutor",e.id)}}>Tutor</button>
                  <button onClick={()=>{UpDate("member",e.id)}}>Member</button>
                </div>
                
                

              
                </div>
              )
            })
          }

        </div>

      </div>

    </div>
  )
}
