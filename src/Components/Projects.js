import './Projects.css'
import ecommerce from '../ecommerce.jpg'
import gallery from '../gallery.jpg'
import burger from '../burger.jpg'
import movie from '../moviesearch.jpg'
import shortfilm from '../shortfilm.jpg'

export default function Projects() {
  return (
    <div className='projects'>
      <h1>My <span>Projects</span></h1>
      <div className='cards'>
        <div className='div1'>
          
            <img src={shortfilm} alt="shortfilm" />
            <div className='innerdiv1'>
              <h2>TimeTravel Short Film</h2>
              <p>
                I created this short film completely by myself — I directed, produced, edited, and even dubbed all the characters. I also played one of the roles in the film. It was a great experience that helped me learn how every part of filmmaking works, from acting to post-production.
              </p>
              <a href="https://youtu.be/7hg9R1-0GEE?si=CydHqNV09onHa0gN"><button>click here</button></a>
            </div>
          
        </div>

        <div className='div1'>
          
            <img src={ecommerce} alt="ecommerce" />
            <div className='innerdiv1'>
              <h2>E-Commerce Website</h2>
              <p>I built a complete front-end E-Commerce website using React.js. It includes features like product listing, detailed product view, add to cart, and checkout pages. I designed the site to be fully responsive and interactive with smooth navigation.</p>
              <a href="https://venunomula.github.io/Ecommerce/"><button>click here</button></a>
            </div>
          
        </div>

        <div className='div1'>
          
            <img src={gallery} alt="gallery" />
            <div className='innerdiv1'>
              <h2>Image Gallery</h2>
              <p>I made an image gallery using React.I added a search box,so when we type any word in that box it sends that word to the pixabay API and shows matching images.</p>
              <a href="https://venunomula.github.io/gallery/"><button>click here</button></a>
            </div>
          
        </div>

        <div className='div1'>
         
            <img src={burger} alt="burger" />
            <div className='innerdiv1'>
              <h2>Burger King Clone</h2>
              <p>I recreated the Burgerkingwebsite using React to improve my frontend development skills.I focused on making the layout similar to the original site using Html,Css, and used React components to seperate different sections like navbar,banner,menuitems,and footer </p>
               <a href="https://venunomula.github.io/BurgerKing/"><button>click here</button></a>
            </div>
          
        </div>

        <div className='div1'>
      
            <img src={movie} alt="movie" />
            <div className='innerdiv1'>
              <h2>Movie Search App</h2>
              <p>I built a movie search web app using React.It fetches movie data from OMDB API based on user inputs.User can type a movie name in the search bar,and the app dynamically displays matching results as responsive cards with movie poster,title.</p>
              <a href="https://venunomula.github.io/Moviesearch/"><button>click here</button></a>
            </div>
          
        </div>
      </div>
    </div>
  )
}
