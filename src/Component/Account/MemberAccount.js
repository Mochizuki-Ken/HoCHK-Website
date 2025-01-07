import React,{useState,useEffect,useRef} from 'react'
import './MemberAccount.css'
import firebase from './../../Service/FireBaseInit'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { Waypoint } from 'react-waypoint'
import Event from '../Events/Event'
import Text from '../../Tools/Dictionary'
export default function MemberAccount({Auth}) {

   

    const [Events_data,SetEvents_data]=useState([])

    const lastPostRef = useRef()

    function getNextData(){
        
          firebase.firestore().collection('Events')
          .orderBy('CreateAt','desc')
          .where('AttendList',"array-contains",Auth.UserID)
          .startAfter(lastPostRef.current || 0)
          .limit(2)
          .get()
          .then((data)=>{
            let datas = data.docs.map((doc) => {
              return {...doc.data(),id:doc.id}
            })
            lastPostRef.current = data.docs[data.docs.length-1]
            SetEvents_data([...Events_data,...datas])
          })
        }
        
      
    
      useEffect(()=>{
        
          firebase.firestore().collection('Events')
          .orderBy('CreateAt','desc')
          .where('AttendList',"array-contains",Auth.UserID)
          .limit(3)
          .get()
          .then((data)=>{
            let datas = data.docs.map((doc) => {
              return {...doc.data(),id:doc.id}
            })
            lastPostRef.current = data.docs[data.docs.length-1]
            SetEvents_data(datas)
    
          })
        
      },[])
  return (
    <div className='MemberAccount_Main_Div'>
        {/* <div className='top_div'>

            <img></img>
            <div>
                <label></label>
                <label></label>
            </div>

        </div> */}
        <div className='bottom_div'>
            <label className='title1'>{Text("Member")} ( {Auth.UserName} | {Auth.UserEmail} )</label>
            <button className='LogOut_btn' onClick={()=>{firebase.auth().signOut()}}>{Text("LogOut")}</button>
            <label className='title1'>{Text("EventRecords")} ( {Events_data.length} )</label>

            <div className='Records_div'>

            {Events_data.map((e,index)=>{
                return(
                    <Event key={index} data={e} type={Auth.UserLevel} userInfo={{uid:Auth.UserID,name:Auth.UserName}}/>
                )
                })}
            {Events_data.length!==0&&<Waypoint  onEnter={()=>{getNextData();console.log('hhh')}}/>}
            <hr/>
            
            </div>

        </div>
    </div>
  )
}
