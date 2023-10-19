import React,{useState,useEffect} from 'react'
import './AboutPage.css'
import Text from '../../Tools/Dictionary'
import firebase from './../../Service/FireBaseInit'
import 'firebase/compat/firestore'
export default function AboutPage() {

  const [Data,SetData] = useState([])

  // useEffect(()=>{
  //   firebase.firestore().collection("Users").get().then((datas)=>{

  //     let Datas = datas.docs.map((e)=>{
  //       return e.data()
  //     })
      
  //     SetData(Datas)
  //   })
  // },[])

  return (
    <div className='AboutPage_Main_Div'>
      <label className='Title'>{Text("AboutText")}</label>
      <div className='content_div'>

        <div className='intro_div'>
          <p>
            {Text("About")}
          </p>

          <p>
            {Text("More1")}
          </p>

          <p>
            {Text("More2")}
          </p>
        
          
        </div>

        <div className='detail_div'>

          <label className='title'>{Text('GoalText')}</label>

          <p>1. {Text('Goal1')}</p>

          <p>2. {Text('Goal2')}</p>

          <p>3. {Text('Goal3')}</p>

          <p>4. {Text('Goal4')}</p>

          {/* <label className='sub_title'>{Text('From2014Text')}</label> */}
          {/* <label className='sub_title'></label> */}

          {/* <p>
          {Text('From2014_1')}
          </p>

          <p>
          {Text('From2014_2')}
          </p>

          <p>
          {Text('From2014_3')}
          </p> */}

          {/* <label className='sub_title'>{Text("From2015Text")}</label> */}

          {/* <p>
          {Text('From2015_1')}
          </p> */}

        </div>

        {/* <div className='Tutor_List'> */}

          {/* <label className='title'>{Text("TutorText")}</label> */}

          {/* <div className='Tutor_display'>
            {
              Data.map((e,index)=>{
                return(
                  <div key={index} className='Tutor_profile_div'>

                    <img src={e.UserImage} />
                    <label>{e.UserName}</label>

                  </div>
                )
              })
            }
          </div> */}

          

        {/* </div> */}

        <div className='btns_div'>
          {/* <button >{Text("Email")}: info@hochk.hk</button>
          <button >{Text("Phone")}: 3442 4216</button> */}
          <button onClick={()=>{window.open("https://www.facebook.com/hochk","_blank")}}>Facebook</button>
          {/* <button onClick={()=>{window.open("https://chat.whatsapp.com/Enj1YMRxBUb8ROxf4f54GL","_blank")}}>Whatsapp Community</button> */}
          {/* <button onClick={()=>{window.open("https://instagram.com/hochk.channel?igshid=MzRlODBiNWFlZA==","_blank")}}>Instagram</button> */}
          <button onClick={()=>{window.open("https://www.youtube.com/@HourofCodeHongKong/about","_blank")}}>YouTube Channel</button>
          <button onClick={()=>{window.open("https://www.meetup.com/hong-kong-hour-of-code-meetup-group/","_blank")}}>Meetup</button>
        </div>

      </div>
    </div>
  )
}
