import React,{useState,useContext} from 'react'
import './AccountPage.css'
import firebase from './../../Service/FireBaseInit'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { AuthContext } from '../../Main'
import MemberAccount from '../../Component/Account/MemberAccount'
import AdminAccount from '../../Component/Account/AdminAccount'
import TutorAccount from '../../Component/Account/TutorAccount'
export default function AccountPage() {
  const {Auth}=useContext(AuthContext)
  return (
    <div className="AccountPage_Main_Div">
        {/* {Auth.user_state&&Auth.UserLevel==="member"&&<MemberAccount Auth={Auth} />}
        {Auth.user_state&&Auth.UserLevel==="tutor"&&<TutorAccount Auth={Auth} />}
        {Auth.user_state&&Auth.UserLevel==="admin"&&<AdminAccount Auth={Auth} />} */}
        {Auth.UserLevel === 'member' && <MemberAccount Auth={Auth}/>}
        {Auth.UserLevel === 'tutor' && <TutorAccount Auth={Auth}/>}
        {Auth.UserLevel === 'admin' && <AdminAccount Auth={Auth}/>}
        {/* <button onClick={()=>{firebase.auth().signOut()}}>LogOut</button> */}
    </div>
  )
}
