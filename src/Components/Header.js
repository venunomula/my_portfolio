import { useState } from 'react'
import './Header.css'
export default function Header(){
    const [state,setstate]=useState(false)

     const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return(
        <div className="header">
            <div className="header-title">
                VenuPortfolio
            </div>
            <div className='menu-icon' onClick={()=>setstate(!state)}>
                <i class="bi bi-list"></i>
            </div>
            <ul className={`header-items ${state?"active":""}`}>
                <li onClick={()=>scrollToSection('home')}>Home </li>
                <li onClick={()=>scrollToSection('about')}>About</li>
                <li onClick={()=>scrollToSection('education')}>Education</li>
                <li onClick={()=>scrollToSection('skills')}>Skills</li>
                <li onClick={()=>scrollToSection('projects')}>Projects</li>
                <li onClick={()=>scrollToSection('contact')}>Contact</li>

            </ul>
        </div>
    )
}