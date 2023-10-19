import React,{useState} from 'react'
import './LanguageBtn.css'
import { getLanguage,setLanguage } from '../../Tools/Languages'
export default function LanguageBtn() {
    const [Language,SetLanguage] = useState(getLanguage())

  return (
    <div className='LanguageBtn_Main_Div'>
        { Language === 'eng' && <button onClick={()=>{setLanguage('chi');SetLanguage(getLanguage());window.location.reload()}}>中文</button>}
        { Language === 'chi' && <button onClick={()=>{setLanguage('eng');SetLanguage(getLanguage());window.location.reload()}}>Eng</button>}
    </div>
  )
}
