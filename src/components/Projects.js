const Projects = (props) => {

    // const handleLink = (url) => {
    //     props.history.push(url)
    // }
    // onClick={()=>handleLink("https://biomechweb.com/")}

    return(
        <div className="body">
            Willow, you idiot
            <h3 className="subtitle">Etched into the walls you find...</h3>
            <h1 className="title">Nothing! Jeffrey uses Git for version control, not stone walls</h1>
            <div className="line"/>
            <div className="container">
                <div className="linked-container">
                    {/* <div className="img-shape"> */}
                        <a href="https://biomechweb.com/"><img className="project" src="https://storage.googleapis.com/biomechweb/steven-lelham-atSaEOeE8Nk-unsplash.jpg" alt="running on track"></img></a>
                    {/* </div> */}
                    <a href="https://biomechweb.com/"><h3 className="project-title">BiomechWeb</h3></a>
                    <p className="project-text">A personal project that I created while enrolled at Devmountain. The site takes raw x and y coordinate data used in Biomechanics research, and displays calculated angles following processing. I used React to build the site, D3 to chart the displayed data, SASS/SCSS to manage styling, and NodeJS/PostgreSQL for the server and database.</p>
                </div>
                <div className="linked-container">
                    <div className="img-shape">
                        <a href="https://cache-n-dash.com/"><img className="project" src="https://storage.googleapis.com/biomechweb/photo-1505778276668-26b3ff7af103.jpeg" alt="geo-caching"></img></a>
                    </div>
                    <a href="https://cache-n-dash.com/"><h3 className="project-title">Cache-N-Dash</h3></a>
                    <p className="project-text">A group project that I created as part of a remote team of four students while enrolled at Devmountain. We used React to build the site, the Google Maps API to render the map and geo-locations, and NodeJS/PostgreSQL for the server and database. I took the lead role on development for the database, server, and building front end React components that incorporated back end data. I also played a large role in Map debugging and integration, as well as site styling.</p>
                </div>
            </div>
        </div>
    )
}

export default Projects