import React,{useState,useContext,useEffect,useRef} from 'react'
import IntroSlide from '../../Component/Home/IntroSlide'
import "./CommunityPage.css"
import CommunityPost from '../../Component/Community/CommunityPost'
import { AuthContext } from '../../Main'
import { Link } from 'react-router-dom'
import firebase from './../../Service/FireBaseInit'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { Waypoint } from 'react-waypoint'
import Text from '../../Tools/Dictionary'
export default function CommunityPage() {

  const [Type,SetType] = useState([])

  const [TypeOptions,SetTypeOptions] = useState(["TECH NEWS","COMPETITION","EVENTS"])

  const [Posts_data,SetPosts_data] = useState([])

  const [SearchText,SetSearchText] = useState()


  const lastPostRef = useRef()


  function getNextData(){
    if (Type.length>=1){
      firebase.firestore().collection('CommunityPosts')
      .where("Type",'array-contains-any',Type)
      .orderBy('CreateAt','desc')
      .startAfter(lastPostRef.current || 0)
      .limit(2)
      .onSnapshot((data)=>{
        let datas = data.docs.map((doc) => {
          return {...doc.data(),id:doc.id}
        })
        lastPostRef.current = data.docs[data.docs.length-1]
        SetPosts_data([...Posts_data,...datas])
      })
    }else{
      firebase.firestore().collection('CommunityPosts')
      .orderBy('CreateAt','desc')
      .startAfter(lastPostRef.current || 0)
      .limit(2)
      .onSnapshot((data)=>{
        let datas = data.docs.map((doc) => {
          return {...doc.data(),id:doc.id}
        })
        lastPostRef.current = data.docs[data.docs.length-1]
        SetPosts_data([...Posts_data,...datas])
      })
    }
    
  }

  function GetData(){
    if (Type.length>=1){
      firebase.firestore().collection('CommunityPosts')
      .where("Type",'array-contains-any',Type)
      .orderBy('CreateAt','desc')
      .limit(3)
      .onSnapshot((data)=>{
        let datas = data.docs.map((doc) => {
          return {...doc.data(),id:doc.id}
        })
        lastPostRef.current = data.docs[data.docs.length-1]
        SetPosts_data(datas)
      })
    }else{
      firebase.firestore().collection('CommunityPosts')
      .orderBy('CreateAt','desc')
      .limit(3)
      .onSnapshot((data)=>{
        let datas = data.docs.map((doc) => {
          return {...doc.data(),id:doc.id}
        })
        lastPostRef.current = data.docs[data.docs.length-1]
        SetPosts_data(datas)

      })
    }
  }

  useEffect(()=>{
    GetData()
  },[Type])

  const {Auth}=useContext(AuthContext)

  return (
    <>
    <div className="CommunityPage_Main_Div">
      {/* {!Auth.user_state &&<IntroSlide In={'left'} 
        title={Text("BecomeHocMember")} 
        p1={Text("EventShortIntro1")} 
        p2={""}
        p3={Text("EventShortIntro3")}
        path={'/login'}
        btnText={Text("Register2")}
        btn_color={"rgba(69, 171, 30, 0.958)"}
        backgroundColor={'rgb(105, 191, 101)'}
        imgurl1={'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/43278465_1050137231832824_8238540013021691904_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=fMk5Dw_XFO4AX-Mol3J&_nc_ht=scontent-hkt1-1.xx&oh=00_AfAMq_swJsT00BzOuojvpzGNIVw4ncB4R958lUo0dqEFzw&oe=654CA2BA'}
        imgurl2={'https://scontent-hkt1-1.xx.fbcdn.net/v/t1.6435-9/40482565_1030258780487336_1555105759782502400_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=XaXBDmUze1UAX84Loqf&_nc_ht=scontent-hkt1-1.xx&oh=00_AfAHMl5eklI9EzwVBLl2D848hIYv1YpjcjLUJAxoyOnN6g&oe=654CC9AE'}
      />} */}

      {Auth.user_state&&Auth.UserLevel==="admin"&& <Link to={'/admin_post_news'} className="NewPost_btn">New Post</Link>}

      <div className="Community_list_div">

        <div className="Community_Filter_div">
          <div className="Search_div">
            <input value={SearchText} placeholder={Text("Search") + " ( #TYPE )" } onChange={(e)=>{SetSearchText(e.target.value.toLocaleUpperCase())}}></input>
            <button onClick={()=>{ SetType(SearchText.split('#').slice(1))}} >{Text("Search")} </button>
          </div>
          
          <div className="options_div">
            <div>
              {TypeOptions.map((e)=>{
                return(
                  <button onClick={()=>{if(!Type.includes(e)){SetType([...Type,e])}}}>{e}</button>
                )
              })}
              
              
            </div>

            <div className="Tags_div">
              {Type.map((e,i)=>{
                return(
                  <label >#{e}</label>
                )
              })}
              {Type.length>=1&& <label onClick={()=>{SetType([])}}>✖️</label>}
              {/* <label>#AI </label>
              <label>#Machine Learning </label> */}
            </div>
              
            
          </div>
        </div>
        <div className="Community_Main_Div">
          
          {Posts_data.map((e)=>{
            return(
              <CommunityPost data={e} type={Auth.UserLevel} />
            )
          })}

          {Posts_data.length!==0&&<Waypoint  onEnter={()=>{getNextData();console.log('hhh')}}/>}

          <hr/>

        </div>

      </div>
      
    </div>
    </>
  )
}
