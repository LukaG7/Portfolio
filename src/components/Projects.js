import scorecard from '../images/scorecard-img.png';
import gymbot from '../images/gymbot-img.png';
import vicepong from '../images/vicepong-img.png';
import { Link } from 'react-router-dom';

function Projects() {
    return (
        <div className='projects'>
            <div className='pro-divs'>
                <h1 className='projects-title'>ScoreCard</h1>
                <img className='project-imgs' src={scorecard}/>
                <div className='button-div'>
                    <Link className='butt-link'>
                        <button className='pro-buttons'>View Project</button>  
                    </Link> 
                </div>
                
            </div>
            <div className='pro-divs'>
                <h1 className='projects-title'>Gym Bot</h1>
                <img className='project-imgs' src={gymbot}/>
                <div className='button-div'>
                    <Link className='butt-link'>
                        <button className='pro-buttons'>View Project</button>  
                    </Link>              
                </div>
                
            </div>
            <div className='pro-divs'>
                <h1 className='projects-title'>Vice Pong</h1>
                <img className='project-imgs' src={vicepong}/>
                <div className='button-div'>
                    <Link className='butt-link'>
                        <button className='pro-buttons'>View Project</button>  
                    </Link> 
                </div>
            </div>
        </div>
    )
}

export default Projects;