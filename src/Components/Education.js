import { useState } from 'react'
import './Education.css'
export default function Education(){
    const [state,setstate]=useState("")
 
      return(
        <div className='education'>
             <h1>My <span>Education</span></h1>
             <div className='schooling'>
                {state==="secondary"?<div className= "edu-detail" onClick={()=>setstate("")}>
                      <h1>Secondary School</h1>
                      <h3>Studied at San juan vidyanikethan high school (2017–2018)</h3>
                      <h2>CGPA:7.8</h2>
                </div>:<div onClick={()=>setstate("secondary")} className='edu'>Secondary School</div>}
                {state==="intermediate"?<div className= "edu-detail" onClick={()=>setstate("")}>
                      <h1>Intermediate</h1>
                      <h3>Studied at Narayana junior college (2018–2020)</h3>
                      <h4>Group:MPC</h4>
                      <h2>Percentage:81%</h2>
                      
                </div>:<div onClick={()=>setstate("intermediate")} className='edu'>Intermediate</div>}
                       {state==="btech"?<div className= "edu-detail" onClick={()=>setstate("")}>
                      <h1>B-Tech</h1>
                       <h3>Studied at Bharath institute of higher education and research (Chennai) (2020–2024)</h3>
                      <h4>Group:CSE</h4>
                      <h2>Percentage:78%</h2>
                </div>:<div onClick={()=>setstate("btech")} className='edu'>B-Tech</div>}
             </div>
            
        </div>
      )
}