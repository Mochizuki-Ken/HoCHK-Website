import React,{useState,useEffect} from 'react'
import './PostEvent.css'
import firebase from './../../Service/FireBaseInit'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export default function PostEvent({type}) {
  const Params = useParams()

  const GoTo=useNavigate()
  const [ImageData,SetImageData]=useState("empty")
  let ImagePreviewURL =ImageData!=="empty"&&ImageData[0]!=="h"&& URL.createObjectURL(ImageData) || "empty"
  
  const [NewEventData,SetNewEventData]=useState({Topic:"",Instructor:{uid:"",name:"",imgUrl:""},EventDateTime:0,RegisterDeadLine:0,Location:"",RegisterLink:"",Type:"",MaxTutor:5,Level:3,Language:"中文"})
  const [DescriptionData,SetDescriptionData]=useState("")

  const [TargetTutor,SetTargetTutor] = useState("")

  const [TutorList,SetTutorList]=useState([])

  useEffect(()=>{
    firebase.firestore().collection("Users").where("UserLevel","==","tutor").get().then((data)=>{
      let datas = data.docs.map((doc) => {
        return {...doc.data(),id:doc.id}
      })
      SetTutorList(datas)
    })
  },[])

  useEffect(()=>{
    if(Params.pid){
      firebase.firestore().collection("Events").doc(Params.pid).get().then((data)=>{
        let DATA=data.data()
        let Type = DATA.Type.toString()
        let NewType = ""
        for (let i = 0 ; i<Type.length; i++){
          if(Type[i]===","){
            NewType = NewType.concat('#')
          }else{
            NewType = NewType.concat(Type[i])
            console.log(NewType)
          }
        }
        SetNewEventData({Topic:DATA.Topic,Instructor:DATA.Instructor,EventDateTime:DATA.EventDateTime,RegisterDeadLine:DATA.RegisterDeadLine,Location:DATA.Location,RegisterLink:DATA.RegisterLink,Type:DATA.Type,MaxTutor:DATA.MaxTutor,Tutors:DATA.Tutors,Level:DATA.Level,Language:DATA.Language,Type:NewType})
        SetDescriptionData(DATA.Description)
        // SetImageData(DATA.ImageUrl)
      })
    }
  },[])

  function GetTutor(){
    firebase.firestore().collection("Users").where("UserLevel","==","tutor").where("UserName","==",TargetTutor).get().then((data)=>{
      let datas = data.docs.map((doc) => {
        return {...doc.data(),id:doc.id}
      })
      SetTutorList(datas)
    })
  }

  function Post(){
    console.log("hhhhihihh")
    const doc = firebase.firestore().collection('Events').doc()
    if (ImageData!=='empty'){
      const ref = firebase.storage().ref('/Events'+doc.id)
      ref.put(ImageData,{contentType:ImageData.type}).then(()=>{
        ref.getDownloadURL().then((imgUrl)=>{
          doc.set(
            {
              Topic:NewEventData.Topic,
              Instructor:"",
              CreateAt:firebase.firestore.Timestamp.now(),
              EventDateTime:firebase.firestore.Timestamp.fromDate(new Date(Date.parse(NewEventData.EventDateTime))),
              RegisterDeadLine:firebase.firestore.Timestamp.fromDate(new Date(Date.parse(NewEventData.RegisterDeadLine))),
              Location:NewEventData.Location,
              RegisterLink:NewEventData.RegisterLink,
              Description:DescriptionData,
              Tutors:[],
              Type:[],
              MaxTutor:NewEventData.MaxTutor,
              ImageUrl:imgUrl,
              Level:"",
              Language:"",
              Finished:false,
              AttendList:[]
            }
          ).then(()=>{GoTo('/events')})
        })
      })
    }else{
      doc.set(
        {
          Topic:NewEventData.Topic,
          Instructor:"",
          CreateAt:firebase.firestore.Timestamp.now(),
          EventDateTime:firebase.firestore.Timestamp.fromDate(new Date(Date.parse(NewEventData.EventDateTime))),
          RegisterDeadLine:firebase.firestore.Timestamp.fromDate(new Date(Date.parse(NewEventData.RegisterDeadLine))),
          Location:NewEventData.Location,
          RegisterLink:NewEventData.RegisterLink,
          Description:DescriptionData,
          Type:[],
          Tutors:[],
          MaxTutor:NewEventData.MaxTutor,
          ImageUrl:"none",
          Finished:false,
          Level:"",
          Language:"",
          AttendList:[]
        }
      ).then(()=>{GoTo('/events')})
    }
  }

  function update(){
    console.log("hhhhihihh")
    const doc = firebase.firestore().collection('Events').doc(Params.pid)
    
    if (true){
      doc.update(
        {
          // Topic:NewEventData.Topic,
          // Instructor:NewEventData.Instructor,
          // CreateAt:firebase.firestore.Timestamp.now(),
          EventDateTime:firebase.firestore.Timestamp.fromDate(new Date(Date.parse(NewEventData.EventDateTime))),
          RegisterDeadLine:firebase.firestore.Timestamp.fromDate(new Date(Date.parse(NewEventData.RegisterDeadLine))),
          Location:NewEventData.Location,
          RegisterLink:NewEventData.RegisterLink,
          // Description:DescriptionData,
          // Type:NewEventData.Type.split("#")||[],
          MaxTutor:NewEventData.MaxTutor,
          ImageUrl:"empty",
          Finished:false,
          // Level:NewEventData.Level,
          // Language:NewEventData.Language,

        }
      ).then(()=>{GoTo('/events')})
    }
  }

  return (
    <div className='PostEvent_Main_Div'>
      <div className='Content_div'>
        <div className='Post_div'>
          <div className="img_div">
              {/* <div className="top_div">
                <input type={'file'}  onChange={(e)=>{SetImageData(e.target.files[0])}} accept="image/*"></input> 
                {ImageData!=="empty"&&<button className="del_btn" onClick={()=>{SetImageData("empty")}}>Delete Image</button>}
              </div>
                
                {ImageData!=="empty"&&ImageData[0]!=="h"&&<img src={ImagePreviewURL} />}
                {ImageData!=="empty"&&ImageData[0]==="h"&&<img src={ImageData} />} */}
          </div>
          <div className='text_div'>
            <label >New Event</label>
            {/* <input type={'text'} value={NewEventData.Topic} onChange={(e)=>{SetNewEventData({...NewEventData,Topic:e.target.value})}} className='topic'></input>
            <label ></label> */}
            <div className='Details'>
              {/* <label>Instructor</label> */}
              {/* <div className='choose_instructor_div'>

                <div className='Search_div'>
                  <input type={'text'} value={TargetTutor} onChange={(e)=>{SetTargetTutor(e.target.value)}}></input>
                  <button onClick={GetTutor}>Search</button>
                </div>

                {NewEventData.Instructor.name!=="" && <div className='instructor_div'>

                  <img src={NewEventData.Instructor.imgUrl}></img>
                  <div className='div'>
                  <label>{NewEventData.Instructor.name}</label>
                  <label>{NewEventData.Instructor.uid}</label>
                    
                  </div>
                  

                </div>}

                <div className='list'>
                  {
                    TutorList.map((e)=>{
                      return(
                        <div onClick={()=>{SetNewEventData({...NewEventData,Instructor:{uid:e.UserID,name:e.UserName,imgUrl:e.UserImage}})}}>
                          <img src={e.UserImage}></img>
                          <div className='div'>
                          <label>{e.UserName}</label>
                          <label>{e.UserEmail}</label>
                          </div>
                          

                        </div>
                      )
                    })
                  }
                </div>

              </div> */}
              
              <label>Date</label>
              <input value={NewEventData.EventDateTime} onChange={(e)=>{SetNewEventData({...NewEventData,EventDateTime:e.target.value})}} type={'datetime-local'}></input>
              
              <label>Location</label>
              <input value={NewEventData.Location} onChange={(e)=>{SetNewEventData({...NewEventData,Location:e.target.value})}} type={'text'}></input>
              
              <label>Register Link (for public)</label>
              <input value={NewEventData.RegisterLink} onChange={(e)=>{SetNewEventData({...NewEventData,RegisterLink:e.target.value})}} type={'url'}></input>
              
              {<>
              <label>Register Deadline (for public)</label>
              <input value={NewEventData.RegisterDeadLine} onChange={(e)=>{SetNewEventData({...NewEventData,RegisterDeadLine:e.target.value})}} type={'datetime-local'}></input>
              </>}

              <label>Max Tutor</label>
              <input value={NewEventData.MaxTutor} onChange={(e)=>{SetNewEventData({...NewEventData,MaxTutor:e.target.value})}} type={'number'}></input>

              {/* <label>Level</label>
              <input value={NewEventData.Level} onChange={(e)=>{SetNewEventData({...NewEventData,Level:e.target.value})}} max={3} min={1} type={'number'}></input> */}
            
              {/* <label>Language</label>
              <input value={NewEventData.Language} onChange={(e)=>{SetNewEventData({...NewEventData,Language:e.target.value})}} type={'text'}></input> */}
            
            </div>

            {/* <div className='description_div'>
              <label>Description</label>
              <textarea id="textArea"  onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          let cursor_pos = document.getElementById("textArea").selectionStart
                          let newString = DescriptionData.slice(0,cursor_pos) + "<br>" + DescriptionData.slice(cursor_pos)
                          SetDescriptionData(newString)
                          // console.log(ContentData)
                        }
                    }} value={DescriptionData} onChange={(e)=>{SetDescriptionData(e.target.value)}}>

              </textarea>
            </div> */}

            {/* <input className="type" value={NewEventData.Type}  onChange={(e)=>{SetNewEventData({...NewEventData,Type:e.target.value.toLocaleUpperCase()})}} placeholder="#TYPE"></input> */}
            <div className="btns_div">
              <button className="back_btn" onClick={()=>{GoTo("/Events")}}>BACK</button>
              <button className="post_btn" onClick={()=>{if(Params.pid){update()}else{Post()}}} >{Params.pid?("UPDATE"):("POST")}</button>
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
