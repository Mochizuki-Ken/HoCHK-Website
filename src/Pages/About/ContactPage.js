import React from 'react'
import "./ContactPage.css"
import Text from '../../Tools/Dictionary'
export default function ContactPage() {
  return (
    <div className="ContactPage_Main_Div">
      
      <div className="top_div">
        <label className="Title">{Text('ContactText')}</label>

        <div className="btns_div">
          <button>{Text("Email")} hochk.channel@gmail.com</button>
          <button>{Text("Phone")} 3442 4216</button>
        </div>
        
      </div>
      <div className="bottom_div">

        <label className="title">{Text("Contact Form")}</label>

        <div className="Contact_From_div">

          <div className="input_div">
            <label className="placeholder">{Text("Name")} *</label>
            <input></input>
          </div>
          <div className="input_div">
            <label className="placeholder">{Text("Email")} *</label>
            <input></input>
          </div>
          <div className="input_div">
            <label className="placeholder">{Text("Phone")}</label>
            <input></input>
          </div>
          <div className="input_div">
            <label className="placeholder">{Text("Message")} *</label>
            <textarea></textarea>
          </div>
          <button>{Text("Submit")}</button>
          
        </div>

      </div>
    </div>
  )
}
