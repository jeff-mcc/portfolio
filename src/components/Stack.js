import {SiReact} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {SiHtml5} from 'react-icons/si'
import {SiCss3} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {SiD3DotJs} from 'react-icons/si'
import {SiPostgresql} from 'react-icons/si'
import {SiNodeDotJs} from 'react-icons/si'
import {SiDigitalocean} from 'react-icons/si'
import {SiGithub} from 'react-icons/si'
import {SiSass} from 'react-icons/si'
import {SiR} from 'react-icons/si'
import {SiMathworks} from 'react-icons/si'
import {SiGooglecloud} from 'react-icons/si'
import {SiUbuntu} from 'react-icons/si'
import {GiBullyMinion} from 'react-icons/gi'
import {GiCow} from 'react-icons/gi'

const Stack = () => {
    return(
        <div className="body">
            Stack
            <h3 className="subtitle">As you ascend the stairs they shift beneath your feet, and you see...</h3>
            <h1 className="title">Development technologies, constantly shifting and changing</h1>
            <div className="line"/>
            <div className="stack-container">
                <div className="icon-div">
                    <SiReact className="stack-icon"/>
                    <p className="menu-item">React</p>
                </div>
                <div className="icon-div">
                    <SiJavascript className="stack-icon"/>
                    <p className="menu-item">Javascript</p>
                </div>
                <div className="icon-div">
                    <SiHtml5 className="stack-icon"/>
                    <p className="menu-item">HTML</p>
                </div>
                <div className="icon-div">
                    <SiCss3 className="stack-icon"/>
                    <p className="menu-item">CSS</p>
                </div>
                <div className="icon-div">
                    <SiRedux className="stack-icon"/>
                    <p className="menu-item">Redux</p>
                </div>
                <div className="icon-div">
                    <SiD3DotJs className="stack-icon"/>
                    <p className="menu-item">D3</p>
                </div>
                <div className="icon-div">
                    <SiPostgresql className="stack-icon"/>
                    <p className="menu-item">PostgreSQL</p>
                </div>
                <div className="icon-div">
                    <SiNodeDotJs className="stack-icon"/>
                    <p className="menu-item">Node</p>
                </div>
                <div className="icon-div">
                    <SiDigitalocean className="stack-icon"/>
                    <p className="menu-item">Digital Ocean</p>
                </div>
                <div className="icon-div">
                    <SiGithub className="stack-icon"/>
                    <p className="menu-item">GitHub</p>
                </div>
                <div className="icon-div">
                    <SiSass className="stack-icon"/>
                    <p className="menu-item">Sass/SCSS</p>
                </div>
                <div className="icon-div">
                    <SiR className="stack-icon"/>
                    <p className="menu-item">R</p>
                </div>
                <div className="icon-div">
                    <SiMathworks className="stack-icon"/>
                    <p className="menu-item">Matlab</p>
                </div>
                <div className="icon-div">
                    <SiGooglecloud className="stack-icon"/>
                    <p className="menu-item">Google Cloud</p>
                </div>
                <div className="icon-div">
                    <SiUbuntu className="stack-icon"/>
                    <p className="menu-item">Ubuntu Linux</p>
                </div>
                <div className="icon-div">
                    <GiBullyMinion className="stack-icon"/>
                    <p className="menu-item">Bully Minion</p>
                </div>
                <div className="icon-div">
                    <GiCow className="stack-icon"/>
                    <p className="menu-item">Cow</p>
                </div>
            </div>
        </div>
    )
}

export default Stack