import React from 'react'
import './CommunityPost.css'
import firebase from './../../Service/FireBaseInit'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import { useNavigate } from 'react-router-dom'
import Text from '../../Tools/Dictionary'
export default function CommunityPost({data,type}) {

    const GoTo = useNavigate()

    function Delete(){
        if (data.ImageUrl==="empty"){
            firebase.firestore().collection("CommunityPosts").doc(data.id).delete()
        }else{
            firebase.storage().ref('/CommunityPost'+data.id).delete().then(()=>{
                firebase.firestore().collection("CommunityPosts").doc(data.id).delete()
            }) 
        }
          
    }

  return (
    <div className="CommunityPost_Main_Div">
        <div className="Post_div">
            <div className="img_div">
                {/* <button onClick={()=>{}}>Delete</button> */}
                {data.ImageUrl!=='empty' && <img src={data.ImageUrl} />}
            </div>

            <div className="text_div">
                <label className="title">{data.Title}<label className="date">{data.CreateAt.toDate().toLocaleString()}</label></label>
                <div className="content_div">
                    <div dangerouslySetInnerHTML={{ __html:"<p>"+data.Content.replace('<br>','<br>')+"</p>" }} />
                </div>

                <div className="Type_div">
            
                    {data.Type.map((e)=>{
                        return(
                        <label > {e} |</label>
                        )
                    })}
                
                </div>

                {   
                    type === "admin"  &&

                    <div className='btns_div'>
                        <button className='edit' onClick={()=>{ GoTo(`../admin_update_post/${data.id}`) }}>{Text('Edit')}</button>
                        <button className='delete' onClick={Delete}>{Text('Delete')}</button>
                    </div>
                }
                
            </div>
        </div>

    </div>
  )
}
