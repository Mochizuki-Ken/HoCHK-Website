import React,{useState,useEffect,useRef} from 'react'
import './TutorAccount.css'
import firebase from './../../Service/FireBaseInit'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { Waypoint } from 'react-waypoint'
import Event from '../Events/Event'
import Text from '../../Tools/Dictionary'
import { Link } from 'react-router-dom'
export default function TutorAccount({Auth}) {
  const [RecordsState,SetRecordsState] = useState("Instructor")

  const [Events_data,SetEvents_data]=useState([])

  const lastPostRef = useRef()

  function getNextData(){
    if(RecordsState === "Instructor"){
      firebase.firestore().collection('Events')
      .orderBy('CreateAt','desc')
      .where("Instructor.UserID",'==',Auth.UserID)
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
    }else{
      firebase.firestore().collection('Events')
      .orderBy('CreateAt','desc')
      .where("Tutors",'array-contains',{'UserID':Auth.UserID,'UserName':Auth.UserName})
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
    
  }
  
  function InitData(e){
    if(RecordsState === "Instructor" || e === "Instructor"){
      firebase.firestore().collection('Events')
      .orderBy('CreateAt','desc')
      .where("Instructor.UserID",'==',Auth.UserID)
      .limit(3)
      .get()
      .then((data)=>{
        let datas = data.docs.map((doc) => {
          return {...doc.data(),id:doc.id}
        })
        lastPostRef.current = data.docs[data.docs.length-1]
        SetEvents_data(datas)

      })
    }else if(RecordsState === "Tutor" || e === "Tutor"){
      firebase.firestore().collection('Events')
      .orderBy('CreateAt','desc')
      .where("Tutors",'array-contains',{'UserID':Auth.UserID,'UserName':Auth.UserName})
      .limit(3)
      .get()
      .then((data)=>{
        let datas = data.docs.map((doc) => {
          return {...doc.data(),id:doc.id}
        })
        lastPostRef.current = data.docs[data.docs.length-1]
        SetEvents_data(datas)

      })
    }
  }


  useEffect(()=>{
    
      InitData()
    
  },[])

  const [State,SetState] = useState("Setting")

  const [ImageData,SetImageData]=useState("empty")

  const [Name,SetName]=useState(Auth.UserName)

  let ImagePreviewURL =ImageData!=="empty"&& URL.createObjectURL(ImageData) || "empty"

  function UpdateProfile(){
    if (ImageData === "empty"){
      firebase.firestore().collection('Users').doc(Auth.UserID).update(
        {
          UserName:Name
        }
      )
    }else{
      if (Auth.AuthImage!=='https://static.vecteezy.com/system/resources/thumbnails/006/877/567/small/work-character-solid-icon-illustration-office-workers-teachers-judges-police-artists-employees-free-vector.jpg'){
        firebase.storage().ref('/UserImage'+Auth.UserID).delete()
      }
      
      const ref = firebase.storage().ref('/UserImage'+Auth.UserID)
      ref.put(ImageData,{contentType:ImageData.type}).then(()=>{
        ref.getDownloadURL().then((imgUrl)=>{
          firebase.firestore().collection('Users').doc(Auth.UserID).update(
            {
              UserName:Name,
              UserImage:imgUrl
            }
          )
        })
      })
    }
  }

  return (
    <div className='TutorAccount_Main_div'>
      
      <div className='top_div'>
        <button className='LogOut_btn' onClick={()=>{firebase.auth().signOut()}}>{Text('LogOut')}</button>

      </div>

      <Link className='link' to={'/events'}>{Text("NavEvents")}(Tutor)</Link>

      <div className='btns2_div'>
        <button onClick={()=>{SetState("Setting");}}>{Text("Profile")}</button>
        <button onClick={()=>{SetState("record");SetRecordsState("InstructorRecords");SetEvents_data([]);InitData("Instructor")}}>{Text("InstructorRecords")}</button>
        <button onClick={()=>{SetState("record");SetRecordsState("TutorRecords");SetEvents_data([]);InitData("Tutor")}}>{Text("TutorRecords")}</button>

      </div>

      {State === "Setting" && 
        <div className='Setting_div'>

          <div className='left_div'>
            <img  src={ImagePreviewURL === "empty" ?(Auth.UserImage):(ImagePreviewURL)} />
            <input onChange={(e)=>{SetImageData(e.target.files[0])}} type={'file'} accept="image/*" />
            {ImageData!=="empty" && <button onClick={()=>{SetImageData("empty")}}>Delete</button>}
          </div>

          <div className='right_div'>
            
            <label>Name<input value={Name} onChange={(e)=>{SetName(e.target.value)}} type='text' /></label>
            

            <label>ID : {Auth.UserID}</label>
            <label>Email : {Auth.UserEmail}</label>

            <button className='update_btn' onClick={UpdateProfile}>Update</button>

          </div>

        </div>
      }

      { State === "record" && <div className='content_div'>
        <label className='title1'>{Text(RecordsState)} ({Events_data.length})</label>

        <div className='Records_div'>

        {Events_data&&Events_data.map((e,index)=>{
                return(
                    <Event key={index} data={e} type={Auth.UserLevel} userInfo={{uid:Auth.UserID,name:Auth.UserName}}/>
                )
                })}

        {Events_data.length!==0&&<Waypoint  onEnter={()=>{getNextData();console.log('hhh')}}/>}
          <hr/>

        </div>

      </div>}

    </div>
  )
}
