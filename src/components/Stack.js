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

const Stack = () => {
    return(
        <div className="body">
            Stack
            <h3 className="subtitle">As you ascend the stairs they shift beneath your feet, and you see...</h3>
            <h1 className="title">Development technologies, constantly shifting and changing</h1>
            <div className="line"/>
            <div className="container">
                <SiReact />
                <SiJavascript />
                <SiHtml5 />
                <SiCss3 />
                <SiRedux />
                <SiD3DotJs />
                <SiPostgresql />
                <SiNodeDotJs />
                <SiDigitalocean />
                <SiGithub />
                <SiSass />
            </div>
        </div>
    )
}

export default Stack