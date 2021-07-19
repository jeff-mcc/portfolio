import {GiScrollQuill} from 'react-icons/gi'
import {SiLinkedin} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'

const Contact = () => {
    return(
        <div className="body">
            What kind of sorcery is this?
            <h3 className="subtitle">You uncover a crystal ball. Upon peering into it you see...</h3>
            <h1 className="title">Numbers and letters that facilitate communication. Is this magic?</h1>
            <div className="line"/>
            <div className="contact-container">
                <div className="row-container">
                    <GiScrollQuill className="stack-icon contact-icon"/>
                    <p className="contact-text">reffery@gmail.com</p>
                </div>
                <a className="contact-link" href="https://www.linkedin.com/in/jeffrey-mcclellan-phd/"><div className="row-container">
                    <SiLinkedin className="stack-icon contact-icon"/>
                    <p className="contact-text">./in/jeffrey-mcclellan-phd/</p>
                </div></a>
                <a className="contact-link" href="https://github.com/jeff-mcc"><div className="row-container">
                    <SiGithub className="stack-icon contact-icon"/>
                    <p className="contact-text">github.com/jeff-mcc</p>
                </div></a>
            </div>
        </div>
    )
}

export default Contact

// https://www.linkedin.com/in/jeffrey-mcclellan-phd/
// https://github.com/jeff-mcc