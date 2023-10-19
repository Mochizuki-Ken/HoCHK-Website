import React,{useState,useContext,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { AuthContext } from '../../Main'
import { Link } from 'react-router-dom'
import firebase from './../../Service/FireBaseInit'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import './Attend.css'
import { useNavigate } from 'react-router-dom'

export default function Attend() {
    const Params = useParams()

    const {Auth}=useContext(AuthContext)

    const [UpdateState,SetUpdateState] = useState(false)

    const GoTo = useNavigate()

    useEffect(()=>{
        if (Auth.user_state && Auth.UserLevel === 'member')
        {
            firebase.firestore().collection("Events").doc(Params.eid).update({
                AttendList:firebase.firestore.FieldValue.arrayUnion(Auth.UserID)
            }).then(()=>{
                SetUpdateState(true)
            })
        }
        else
        {
            SetUpdateState("AuthError")
        }
    },[])

  return (
    <div className='Attend_Main_Div'>
    
        {UpdateState===true && <label>Attend Record Updated !</label>}

        {UpdateState===true && <button onClick={()=>{GoTo('/Events')}}>Done</button>}

        {UpdateState==="AuthError" && <label>Auth Error</label> }

        {UpdateState==="AuthError" && <button onClick={()=>{GoTo('/Events')}}>Back</button> }

    </div>
  )
}
