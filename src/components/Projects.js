import {useState} from 'react'

const allText = [
    "A personal project that I created while enrolled at Devmountain. The site takes raw x and y coordinate data used in Biomechanics research, and displays calculated angles following processing. I used React to build the site, D3 to chart the displayed data, SASS/SCSS to manage styling, and NodeJS/PostgreSQL for the server and database.",
    "A group project that I created as part of a remote team of four students while enrolled at Devmountain. We used React to build the site, the Google Maps API to render the map and geo-locations, and NodeJS/PostgreSQL for the server and database. I took the lead role on development for the database, server, and building front end React components that incorporated back end data. I also played a large role in Map debugging and integration, as well as site styling."
]

const allTitles = [
    "BiomechWeb",
    "Cache-N-Dash"
]

const allImg = [
    "https://storage.googleapis.com/biomechweb/steven-lelham-atSaEOeE8Nk-unsplash.jpg",
    "https://storage.googleapis.com/biomechweb/photo-1505778276668-26b3ff7af103.jpeg"
]

const allLinks = [
    "https://biomechweb.com/",
    "https://cache-n-dash.com/"
]

const Projects = () => {
    const [dispBool, setDispBool] = useState(false)
    const [projText, setProjText] = useState('')
    const [projTitle, setProjTitle] = useState('')
    const [imgSrce, setImgSrce] = useState('')
    const [aLink, setALink] = useState('')

    const showProject = (proj) => {
        setDispBool(true)
        setProjText(allText[proj])
        setProjTitle(allTitles[proj])
        setImgSrce(allImg[proj])
        setALink(allLinks[proj])
    }

    const closeProject = () => {
        setDispBool(false)
        setProjText('')
        setProjTitle('')
        setImgSrce('')
        setALink('')
    }

    return(
        <div className="body">
            Willow, you idiot
            <h3 className="subtitle">Etched into the walls you find...</h3>
            <h1 className="title">Nothing! Jeffrey uses Git for version control, not stone walls</h1>
            <div className="line"/>
            <div className={dispBool===true ? "container extend-background" : "container"}>
                <div className="linked-container">
                    <h3 className="project-title style-title" onClick={()=>showProject(0)}>BiomechWeb</h3>
                    <div className="img-shape">
                        <img className={dispBool===false ? "project dashed-line" : "project"} src="https://storage.googleapis.com/biomechweb/steven-lelham-atSaEOeE8Nk-unsplash.jpg" alt="running on track" onClick={()=>showProject(0)}></img>
                    </div>
                    {/* <a href="https://biomechweb.com/"><img className="project" src="https://storage.googleapis.com/biomechweb/steven-lelham-atSaEOeE8Nk-unsplash.jpg" alt="running on track"></img></a> */}
                    {/* <a href="https://biomechweb.com/"><h3 className="project-title">BiomechWeb</h3></a> */}
                    {/* <p className="project-text">A personal project that I created while enrolled at Devmountain. The site takes raw x and y coordinate data used in Biomechanics research, and displays calculated angles following processing. I used React to build the site, D3 to chart the displayed data, SASS/SCSS to manage styling, and NodeJS/PostgreSQL for the server and database.</p> */}
                </div>
                <div className="linked-container">
                    <h3 className="project-title style-title" onClick={()=>showProject(1)}>Cache-N-Dash</h3>
                    <div className="img-shape">
                        <img className={dispBool===false ? "project dashed-line" : "project"} src="https://storage.googleapis.com/biomechweb/photo-1505778276668-26b3ff7af103.jpeg" alt="geo-caching" onClick={()=>showProject(1)}></img>
                        {/* <a href="https://cache-n-dash.com/"><img className="project" src="https://storage.googleapis.com/biomechweb/photo-1505778276668-26b3ff7af103.jpeg" alt="geo-caching"></img></a> */}
                    </div>
                    {/* <a href="https://cache-n-dash.com/"><h3 className="project-title">Cache-N-Dash</h3></a> */}
                    {/* <p className="project-text">A group project that I created as part of a remote team of four students while enrolled at Devmountain. We used React to build the site, the Google Maps API to render the map and geo-locations, and NodeJS/PostgreSQL for the server and database. I took the lead role on development for the database, server, and building front end React components that incorporated back end data. I also played a large role in Map debugging and integration, as well as site styling.</p> */}
                </div>
                {dispBool &&
                    // <div className="body2"> 
                        <div className="popup">
                            <p className="close" onClick={closeProject}>x</p>
                            <a href={aLink}><h3 className="project-title popup-title">{projTitle}</h3></a>
                            <div className="img-shape">
                                <a href={aLink}><img className="project" src={imgSrce} alt={projTitle}></img></a>
                            </div>
                            <p className="project-text">{projText}</p>
                        </div>
                    // </div>
                }
            </div>
        </div>
    )
}

export default Projects

// <div className="colored">--click for details--</div>