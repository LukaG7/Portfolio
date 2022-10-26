

function ContactMe() {
    return (
        <div>
            <h3>lukasfullstack@gmail.com</h3>

            <a href="https://github.com/LukaG7" target='_blank'>
                <h3>GitHub</h3>
            </a>
            
            <a href="https://www.linkedin.com/in/lukas-gonzalez/" target='_blank'>
                <h3>LinkedIn</h3>
            </a>

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