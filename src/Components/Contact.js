import { useState } from 'react'
import axios from 'axios'
import './Contact.css'
export default function Contact(){
    const [form,setform]=useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })
    function handlechange(e){
        setform({...form,[e.target.name]:e.target.value})
    }
    async function handlesubmit(e) {
        e.preventDefault();
        try{
            const res=await axios.post("https://portfolio-zpwb.vercel.app/contact",form)
              console.log("res.data:", res.data);
 
         
           setform({name:"",email:"",subject:"",message:""})
           alert("Message sent successfully")
        }
        catch(err){
            console.log(err);
            
        }
    }
    return(
        <>
        <div className='contact'>
           <h1>Contact <span>Me</span></h1>
           <div className='details'>
                <div className='details-me'>
                    <h3>Let's Work Together</h3>
                    <p>I’m always excited to collaborate on creative and impactful projects. Whether you’re looking to build a modern website, redesign your brand’s digital presence, or bring a new idea to life — let’s connect and make it happen together.</p>
                    <div className='email'>
                       <i class="bi bi-envelope"></i>
                       <p>arjunvenu744@gmail.com</p>
                    </div>
                     <div className='phone'>
                       <i class="bi bi-telephone"></i> 
                       <p>9390848593</p>
                    </div>
                </div>
                <div className='details-form'>
                     <form onSubmit={handlesubmit}>
                        <input type="text" placeholder='Enter Your Name' name='name' value={form.name} onChange={handlechange} required/>
                        <input type="email" placeholder='Enter Your Email' name='email' value={form.email} onChange={handlechange} required/>
                        <input type="text" placeholder='Enter Your Subject' name='subject' value={form.subject} onChange={handlechange} required />
                        <textarea type="text" placeholder='Enter Your Message' className='message' name='message' value={form.message} onChange={handlechange} required></textarea>                       
                         <button type='submit'>Submit</button>
                     </form>
                </div>
           </div>
        </div>
        <div className='footer'>
            <p>© 2025 Nomula Venu. All rights reserved.</p>
        </div>
        </>
        
    )
}