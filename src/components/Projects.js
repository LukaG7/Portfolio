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
                <a target='_blank' href='https://elegant-centaur-2ad7d4.netlify.app/'>
                    <button className='pro-buttons'>View Project</button>
                </a>
                
            </div>
            <div className='pro-divs'>
                <h1 className='projects-title'>Gym Bot</h1>
                <img className='project-imgs' src={gymbot}/>
                <a target='_blank' href='https://gym-bot-app.herokuapp.com/'>
                    <button className='pro-buttons'>View Project</button>
                </a>
                
            </div>
            <div className='pro-divs'>
                <h1 className='projects-title'>Vice Pong</h1>
                <img className='project-imgs' src={vicepong}/>
                <a target='_blank' href='https://lukag7.github.io/Game-Project/'>
                    <button className='pro-buttons'>View Project</button>
                </a>
            </div>
        </div>
    )
}

export default Projects;