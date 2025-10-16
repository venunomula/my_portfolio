import './Skills.css'
import img from '../Components/logo192.png'
export default function Skills(){
    return(
        <div className='skills-container'>
             <h1>My <span>Skills</span></h1>
            <div className='skills' >
                  <div className='techinacal'>
                  <h3>Technical Skills</h3>
                  <div className='html'>
                    <i class="bi bi-filetype-html"></i>
                    <div className='htmlper'>
                        <span>HTML</span>
                        <span className='per'>90%</span>
                    </div>
                    <div className='bar'>
                        <div className='bar-color'></div>
                    </div>
                  </div>
                  <div className='css'>
                    <i class="bi bi-css"></i>
                    <div className='cssper'>
                        <span>CSS</span>
                        <span className='per'>70%</span>
                    </div>
                    <div className='bar'>
                        <div className='bar-color'></div>
                    </div>
                  </div>
                   <div className='javascript'>
                    <i class="bi bi-javascript"></i>
                    <div className='javascriptper'>
                        <span>JavaScript</span>
                        <span className='per'>70%</span>
                    </div>
                    <div className='bar'>
                        <div className='bar-color'></div>
                    </div>
                  </div>
                   <div className='react'>
                    <img src={img} alt="" />
                    <div className='reactper'>
                        <span>React-Js</span>
                        <span className='per'>60%</span>
                    </div>
                    <div className='bar'>
                        <div className='bar-color'></div>
                    </div>
                  </div>
                  <div className='sql'>
                    <i class="bi bi-filetype-sql"></i>
                    <div className='sqlper'>
                        <span>SQL</span>
                        <span className='per'>70%</span>
                    </div>
                    <div className='bar'>
                        <div className='bar-color'></div>
                    </div>
                  </div>
                     <div className='git'>
                       <i class="bi bi-git"></i>
                    <div className='gitper'>
                        <span>Git</span>
                        <span className='per'>71%</span>
                    </div>
                    <div className='bar'>
                        <div className='bar-color'></div>
                    </div>
                  </div>
                      <div className='github'>
                       <i class="bi bi-github"></i>
                    <div className='githubper'>
                        <span>Git-Hub</span>
                        <span className='per'>65%</span>
                    </div>
                    <div className='bar'>
                        <div className='bar-color'></div>
                    </div>
                  </div>
             </div>
             <div className='Professional-skills'>
                  <h3>Professional Skills</h3>
                  <div className='circles'>
                     <div className='circle1'>
                        <div className='creativity' style={{"--percentage":90}}>
                           <div className='inner'>90%</div>
                        </div>
                        <p>Creativity</p>
                     </div>
                     <div className='circle2'>
                        <div className='communication' style={{"--percentage":60}}>
                           <div className='inner'>60%</div>
                        </div>
                        <p>Communication</p>
                     </div>
                      <div className='circle3'>
                        <div className='problem' style={{"--percentage":70}}>
                           <div className='inner'>70%</div>
                        </div>
                        <p>Problem Solving</p>
                     </div>
                      <div className='circle4'>
                        <div className='team' style={{"--percentage":80}}>
                           <div className='inner'>80%</div>
                        </div>
                        <p>Team Work</p>
                     </div>
                       <div className='circle5'>
                        <div className='direction' style={{"--percentage":90}}>
                           <div className='inner'>90%</div>
                        </div>
                        <p>Direction</p>
                     </div>
                     
                  </div>
                  
             </div>
            </div>
        </div>
    )
}