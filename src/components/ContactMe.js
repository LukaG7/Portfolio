

function ContactMe() {
    return (
        <div>
            <h1>Contact Me</h1>

            <a href="https://github.com/LukaG7" target='_blank'>
                <h3>GitHub</h3>
            </a>
            
            <a href="https://www.linkedin.com/in/lukas-gonzalez/" target='_blank'>
                <h3>LinkedIn</h3>
            </a>

            <h3>lukasfullstack@gmail.com</h3>

            <form className="contactme-form">
                <label>
                    email
                </label>
                <input></input>
                <label>
                    name
                </label>
                <input></input>
                <label>
                    message
                </label>
                <input></input>
            </form>
        </div>
    )
}

export default ContactMe;