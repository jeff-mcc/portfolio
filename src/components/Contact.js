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
            <div className="container">
                <div>
                    <GiScrollQuill />
                    <p>reffery@gmail.com</p>
                </div>
                <div>
                    <SiLinkedin />
                    <p>LinkedIn profile</p>
                </div>
                <div>
                    <SiGithub />
                    <p>GitHub profile</p>
                </div>
            </div>
        </div>
    )
}

export default Contact