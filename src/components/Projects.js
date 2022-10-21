import scorecard from '../images/scorecard-img.png';
import gymbot from '../images/gymbot-img.png';
import vicepong from '../images/vicepong-img.png';
import { Link } from 'react';

function Projects() {
    return (
        <div className='projects'>
            <div className='pro-divs'>
                <h1 className='projects-title'>ScoreCard</h1>
                <img className='project-imgs' src={scorecard}/>
                {/* <Link>
                    <button className='pro-buttons'>View Project</button>
                </Link> */}
            </div>
            <div className='pro-divs'>
                <h1 className='projects-title'>Gym Bot</h1>
                <img className='project-imgs' src={gymbot}/>
                {/* <Link>
                    <button className='pro-buttons'>View Project</button>
                </Link> */}
                
            </div>
            <div className='pro-divs'>
                <h1 className='projects-title'>Vice Pong</h1>
                <img className='project-imgs' src={vicepong}/>
                {/* <Link>
                    <button className='pro-buttons'>View Project</button>
                </Link> */}
            </div>
        </div>
    )
}

export default Projects;