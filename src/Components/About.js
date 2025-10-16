import './About.css'
import profilee from '../WhatsApp Image 2025-10-05 at 18.02.16_8be45e4d.jpg'
export default function About(){
           const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
    return(
        <div className='about'>
          <div className='small-profile'>
           <img src={profilee} alt="" />
          </div>
          <div className='description'>
             <h1>About <span>Me</span></h1>
             <h3>FrontEnd Developer!</h3>
             <p>Hello! I’m Nomula Venu, a passionate Frontend Developer from Hyderabad with a strong desire to build clean, responsive, and user-friendly web applications. I specialize in HTML, CSS, JavaScript, and React.js, and I love turning creative ideas into interactive digital experiences. I enjoy writing efficient code, designing intuitive interfaces, and continuously learning modern web technologies to stay up to date in this fast-evolving tech world.Beyond coding, I’m also a Short Film Director who loves storytelling through visuals. Directing short films has helped me develop a creative mindset, strong visualization skills, and attention to detail — qualities that deeply influence my approach to front-end development as well.When I’m not coding or directing, I enjoy exploring new ideas, watching films, and creating engaging content that inspires others.</p>
            <button onClick={()=>scrollToSection('education')}>More About Me</button>
          </div>
        </div>
    )
}