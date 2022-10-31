import myLogo from '../images/LG-logo.png';

function NavBar() {
    return (
        <div className='sidebar'>
            <img src={myLogo} className='myLogo'/>
            {/* <h3>Lukas Gonzalez</h3> */}
            <h3>About Me</h3>
            <h3>Projects</h3>
            <h3>Contact Me</h3>
        </div>
    )
}

export default NavBar;