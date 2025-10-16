import './Home.css'
import { useState,useEffect } from 'react';
import profile from '../WhatsApp Image 2025-10-05 at 18.02.16_8be45e4d.jpg'
export default function Home(){
   const words = ["Frontend Developer","ShortFilm Director"];
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

    const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }}

  useEffect(() => {
    const currentWord = words[index % words.length];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
      }, 200);
    }

   
    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setIndex(index + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);
    return(
       <div className='home'>
         <div className='intro'>
             <h3>Hello, It's Me</h3>
          <h1>Nomula Venu</h1>
          <h3>And I'm a <span className='type'>{text}</span></h3>
          <p>I'm a passionate frontend developer I enjoy building responsive web applications.
            <br />I love turning ideas into real projects and exploring new technologies.
          </p>
          <div className='links'>
              <a href="https://www.facebook.com/share/1BzJcGJ8qT/?mibextid=LQQJ4d"><i class="bi bi-facebook"></i></a>
              <a href="https://wa.me/9390848593"><i class="bi bi-whatsapp"></i></a>
              <a href="https://www.instagram.com/iam_venuarjun?igsh=MXZobWh3ZHc1M3J5bQ%3D%3D&utm_source=qr"><i class="bi bi-instagram"></i></a>
              <a href="http://linkedin.com/in/nomula-venu-834512273"><i class="bi bi-linkedin"></i></a>
              <a href="https://youtube.com/@telugusciverse?si=EryfHQ8n6tUGDXOC"><i class="bi bi-youtube"></i></a>
          </div>
          <button onClick={()=>scrollToSection('about')}>More About Me</button>
         </div>
          <div className='profile'>
            <img src={profile} alt="" onClick={()=>scrollToSection('about')}/>
          </div>
       </div>
    )
}