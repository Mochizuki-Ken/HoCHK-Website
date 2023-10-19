import React,{useState,useEffect} from 'react'
import './PostNews.css'
import firebase from './../../Service/FireBaseInit'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
export default function PostNews({type}) {
  const Params = useParams()

  const GoTo=useNavigate()

  const [ImageData,SetImageData]=useState("empty")

  let ImagePreviewURL =ImageData!=="empty"&& URL.createObjectURL(ImageData) || "empty"

  const [TitleData,SetTitleData]=useState("")

  const [ContentData,SetContentData]=useState("")

  const [TypeData,SetTypeData]=useState([])

  const [CurrentImage,SetCurrentImage] = useState("empty")

  const [CurrentImageState,SetCurrentImageState] = useState("empty")

  useEffect(()=>{
    if(Params.pid){
      firebase.firestore().collection("CommunityPosts").doc(Params.pid).get().then((data)=>{
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
        SetCurrentImage(DATA.ImageUrl)
        SetCurrentImageState(DATA.ImageUrl)
        SetTypeData(NewType)
        SetTitleData(DATA.Title)
        SetContentData(DATA.Content)
      })
    }
  },[])
  
  function Post(){
    const doc = firebase.firestore().collection('CommunityPosts').doc()
    if (ImageData!=='empty')
    {

      const ref = firebase.storage().ref('/CommunityPost'+doc.id)
      
      ref.put(ImageData,{contentType:ImageData.type}).then(()=>{

        ref.getDownloadURL().then((imgUrl)=>{

          doc.set(

            {
              Title:TitleData,
              Content:ContentData,
              CreateAt:firebase.firestore.Timestamp.now(),
              Type:TypeData.split("#")||[],
              ImageUrl:imgUrl
            }

          ).then(()=>{GoTo('/community')})

        })

      })

    }
    else
    {
      doc.set(

        {
          Title:TitleData,
          Content:ContentData,
          CreateAt:firebase.firestore.Timestamp.now(),
          Type:TypeData.split("#")||[],
          ImageUrl:"empty"
        }

      ).then(()=>{GoTo('/community')})
    }
  }

  function Update(){
    const doc = firebase.firestore().collection('CommunityPosts').doc(Params.pid)
    if(ImageData !=='empty' && CurrentImage === 'empty' && CurrentImageState === 'empty'){

      // const ref = firebase.storage().ref('/CommunityPost'+doc.id)
      // ref.delete()
      console.log('a')
      const ref = firebase.storage().ref('/CommunityPost'+doc.id)
        ref.put(ImageData,{contentType:ImageData.type}).then(()=>{
          ref.getDownloadURL().then((imgUrl)=>{
            doc.update(
              {
                Title:TitleData,
                Content:ContentData,
                Type:TypeData.split("#")||[],
                ImageUrl:imgUrl
              }
            ).then(()=>{GoTo('/community')})
          })
        })

      
    }else if(ImageData ==='empty' &&  CurrentImageState !== 'empty'){
      console.log('b')
      const ref = firebase.storage().ref('/CommunityPost'+doc.id)
      ref.delete()
      doc.update(
        {
          Title:TitleData,
          Content:ContentData,
          Type:TypeData.split("#")||[],
          ImageUrl:"empty"
        }
      ).then(()=>{GoTo('/community')})
    }else if(ImageData ==='empty' && CurrentImage === "empty" &&  CurrentImageState === 'empty'){
      console.log('c')
      doc.update(
        {
          Title:TitleData,
          Content:ContentData,
          Type:TypeData.split("#")||[],
        }
      ).then(()=>{GoTo('/community')})
    }else{
      console.log('d')
      const ref = firebase.storage().ref('/CommunityPost'+doc.id)
      ref.delete().then(()=>{
        ref.put(ImageData,{contentType:ImageData.type}).then(()=>{
          ref.getDownloadURL().then((imgUrl)=>{
            doc.update(
              {
                Title:TitleData,
                Content:ContentData,
                Type:TypeData.split("#")||[],
                ImageUrl:imgUrl
              }
            ).then(()=>{GoTo('/community')})
          })
        })
      })
    }
  }
  return (
    <div className="PostNews_Main_Div">
      <div className="Content_div">
      <div className="Post_div">
            <div className="img_div">
              <div className="top_div">
                <input type={'file'}  onChange={(e)=>{SetImageData(e.target.files[0])}} accept="image/*"></input>
                {(ImageData!=="empty" || CurrentImage!=="empty" )&&<button className="del_btn" onClick={()=>{SetImageData("empty");SetCurrentImage('empty')}}>Delete Image</button>}{/**/}
              </div>
                
                {(ImageData!=="empty" ||( Params.pid && CurrentImage !== 'empty'))&&<img src={ImageData==="empty" ? (CurrentImage):(ImagePreviewURL)} />}
            </div>

            <div className="text_div">
                <label>Title</label>
                <input value={TitleData} onChange={(e)=>{SetTitleData(e.target.value)}} className="title"></input>
                <label>Content</label>
                <div className="content_div">
                  <textarea id='textArea2' onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          let cursor_pos = document.getElementById("textArea2").selectionStart
                          let newString = ContentData.slice(0,cursor_pos) + "<br>" + ContentData.slice(cursor_pos)
                          SetContentData(newString)
                          console.log(ContentData)
                        }
                    }} value={ContentData}  onChange={(e)=>{SetContentData(e.target.value)}} className="content" />
                  

                  {/* <button>Preview</button> */}
                  {/* {ContentData&&<div className='content_preview' dangerouslySetInnerHTML={{ __html:ContentData.replace('<br>','<br>') }} /> */}


                </div>
                <button className="add_btn" onClick={()=>{SetContentData(ContentData+`<a href="${prompt("Link")}">${prompt("Link")}</a>`)}}>Add Link</button>
                <input className="type" value={TypeData} onChange={(e)=>{SetTypeData(e.target.value.toLocaleUpperCase())}} placeholder="#TYPE"></input>
            </div>

            <div className="btns_div">
              <button className="back_btn" onClick={()=>{GoTo('/community')}}>BACK</button>
              {!Params.pid&&<button className="post_btn" onClick={Post}>POST</button>}
              {Params.pid&&<button className="post_btn" onClick={Update}>UPDATE</button>}
            </div>

        </div>
      </div>
    </div>
  )
}
