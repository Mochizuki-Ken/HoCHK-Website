import React,{useState} from 'react'
import './SupportersIntro.css'
import Text from '../../Tools/Dictionary'
export default function SupportersIntro() {
  const [supporters,setSupporters]=useState(
    [
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_dada7c9f61b545479b3718dca5cbcb97.jpg/v1/fill/w_178,h_176,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_dada7c9f61b545479b3718dca5cbcb97.jpg",YouTube_Url:"https://www.youtube.com/embed/o76ta6sqB9Q",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_94381cb808d1430dbfe69d7c73019715.jpg/v1/fill/w_188,h_176,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_94381cb808d1430dbfe69d7c73019715.jpg",YouTube_Url:"https://www.youtube.com/embed/o76ta6sqB9Q",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_599eb5e5559447e4b141007d24ae956d.jpg/v1/fill/w_190,h_176,al_c,lg_1,q_80,enc_auto/3d5ea1_599eb5e5559447e4b141007d24ae956d.jpg",YouTube_Url:"https://www.youtube.com/embed/o76ta6sqB9Q",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_f6538f844d664cb690a81c67e87ff997.jpg/v1/fill/w_180,h_176,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_f6538f844d664cb690a81c67e87ff997.jpg",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_64b01a6bde894ebabcb5364e9fc981f2.jpg/v1/fill/w_181,h_181,al_c,lg_1,q_80,enc_auto/3d5ea1_64b01a6bde894ebabcb5364e9fc981f2.jpg",YouTube_Url:"https://www.youtube.com/embed/o76ta6sqB9Q",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_d6735bfc29704c27b6f739bc36e1187a.jpg/v1/fill/w_188,h_184,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_d6735bfc29704c27b6f739bc36e1187a.jpg",YouTube_Url:"https://www.youtube.com/embed/o76ta6sqB9Q",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_02983858d0884acfb169c75ef292071e.jpg/v1/fill/w_190,h_184,al_c,lg_1,q_80,enc_auto/3d5ea1_02983858d0884acfb169c75ef292071e.jpg",YouTube_Url:"https://www.youtube.com/embed/o76ta6sqB9Q",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_81e90f3c36e648e3a87b8e0df960db0b.jpg/v1/fill/w_180,h_184,al_c,lg_1,q_80,enc_auto/3d5ea1_81e90f3c36e648e3a87b8e0df960db0b.jpg",YouTube_Url:"https://www.youtube.com/embed/o76ta6sqB9Q",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_2f46e6ec2bbe47f6b22acc5bbecacb20.jpg/v1/fill/w_184,h_184,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_2f46e6ec2bbe47f6b22acc5bbecacb20.jpg",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_72ec3c39214144bb829f86aa59b4904a.jpg/v1/fill/w_190,h_192,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_72ec3c39214144bb829f86aa59b4904a.jpg",YouTube_Url:"https://www.youtube.com/embed/o76ta6sqB9Q",Position:["https://static.wixstatic.com/media/3d5ea1_f891fe6f65e84a4aa35da7e32612a18b.jpg/v1/fill/w_188,h_184,al_c,lg_1,q_80,enc_auto/3d5ea1_f891fe6f65e84a4aa35da7e32612a18b.jpg","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_54236b269619424e9390e5aa8dbc1df2.jpg/v1/fill/w_154,h_164,al_c,lg_1,q_80,enc_auto/3d5ea1_54236b269619424e9390e5aa8dbc1df2.jpg",YouTube_Url:"https://www.youtube.com/embed/o76ta6sqB9Q",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_2fef9225089f48628168cea26d87cf3c.jpg/v1/fill/w_184,h_186,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_2fef9225089f48628168cea26d87cf3c.jpg",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_944b2eb2bb334f059c266bd77a04ff63.jpg/v1/fill/w_188,h_186,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_944b2eb2bb334f059c266bd77a04ff63.jpg",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_3622d2cf64ec488f8a226f7bb966c629.jpg/v1/fill/w_190,h_184,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_3622d2cf64ec488f8a226f7bb966c629.jpg",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_7c67b940fbe54b2f9b4669dfa72dc242.jpg/v1/fill/w_149,h_153,al_c,lg_1,q_80,enc_auto/3d5ea1_7c67b940fbe54b2f9b4669dfa72dc242.jpg",YouTube_Url:"https://www.youtube.com/embed/o76ta6sqB9Q",Position:["https://static.wixstatic.com/media/3d5ea1_f891fe6f65e84a4aa35da7e32612a18b.jpg/v1/fill/w_188,h_184,al_c,lg_1,q_80,enc_auto/3d5ea1_f891fe6f65e84a4aa35da7e32612a18b.jpg","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_e268188c28144e7e8af2531a73f5c34d.jpg/v1/fill/w_186,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_e268188c28144e7e8af2531a73f5c34d.jpg",YouTube_Url:"https://www.youtube.com/embed/o76ta6sqB9Q",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_6a41476119554e29aa34b73165962e09.jpg/v1/fill/w_188,h_188,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_6a41476119554e29aa34b73165962e09.jpg",Position:["Government Chief Information Officer","政府資訊科技總監"]},
      {name:["Mr. Daniel Lai","賴錫璋  先生"],imageUrl:"https://static.wixstatic.com/media/3d5ea1_84b68ce24bc04da2b2a7fbb7d46a2e06.jpg/v1/fill/w_190,h_192,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3d5ea1_84b68ce24bc04da2b2a7fbb7d46a2e06.jpg",Position:["Government Chief Information Officer","政府資訊科技總監"]}
    ]
  )

  return (
    <div className="SupportersIntro_Main_Div" >
      <div className="Left">
        {
          supporters.map((e)=>{
            return(
              <img src={e.imageUrl}></img>//${e.imageUrl%
            )
          })
        }
      </div>
      <div className="Right">
        <label className='Title'>{Text("SupportText")}</label>

        <article className='Intro'>

          <p>{Text("Support1")}</p>
          <p>{Text("Support2")}</p>
          
        </article>



        <button className="MoreSupporters_btn" onClick={()=>{window.open('https://www.youtube.com/channel/UCEdPRFKRSD-mqNw0h0AjP_w','_blank')}}>{Text("HearOtherBtn")}</button>


        {/* <label className='Title'>{Text('ShareText')}</label> */}

        {/* <article className='Intro'>
          <p>{Text('Share1')}</p>
          <p>{Text('Share2')}</p>
          
        </article> */}
      </div>

      
    </div>
  )
}