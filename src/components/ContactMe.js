

function ContactMe() {
    return (
        <div className="contactme">
            {/* <h1>Contact Me</h1>

            <a href="https://github.com/LukaG7" target='_blank'>
                <h3>GitHub</h3>
            </a>
            
            <a href="https://www.linkedin.com/in/lukas-gonzalez/" target='_blank'>
                <h3>LinkedIn</h3>
            </a>

            <h3>lukasfullstack@gmail.com</h3> */}

            <form className="contactme-form">
                <label>
                    Email
                </label>
                <input></input>
                <label>
                    Name
                </label>
                <input></input>
                <label>
                    Message
                </label>
                <input></input>
            </form>
        </div>
    )
}

export default ContactMe;