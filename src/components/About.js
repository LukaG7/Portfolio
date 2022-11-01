import scorecard from '../images/scorecard-img.png';
import gymbot from '../images/gymbot-img.png';
import vicepong from '../images/vicepong-img.png';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='projects'>
            <div className='pro-divs'>
                <h1 className='projects-title'>ScoreCard</h1>
                <img className='project-imgs' src={scorecard}/>
                <div className='button-div'>
                    <a href='https://elegant-centaur-2ad7d4.netlify.app/' target='_blank' className='butt-link'>
                        <button className='pro-buttons'>View Project</button>  
                    </a> 
                </div>
                
            </div>
            <div className='pro-divs'>
                <h1 className='projects-title'>Gym Bot</h1>
                <img className='project-imgs' src={gymbot}/>
                <div className='button-div'>
                    <a href='https://gym-bot-app.herokuapp.com/' target='_blank' className='butt-link'>
                        <button className='pro-buttons'>View Project</button>  
                    </a>              
                </div>
                
            </div>
            <div className='pro-divs'>
                <h1 className='projects-title'>Vice Pong</h1>
                <img className='project-imgs' src={vicepong}/>
                <div className='button-div'>
                    <a href='https://lukag7.github.io/Game-Project/' target='_blank' className='butt-link'>
                        <button className='pro-buttons'>View Project</button>  
                    </a> 
                </div>
            </div>
        </div>
    )
}

export default About;