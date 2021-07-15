import {useState} from 'react'
import './App.css';
import {GiNinjaVelociraptor} from "react-icons/gi"
import {GiEvilMinion} from "react-icons/gi"
import {GiHobbitDwelling} from "react-icons/gi"
import {GiCrystalBall} from "react-icons/gi"
import {GiBattleAxe} from "react-icons/gi"
// possibly use: GiBullyMinion, GiChicken, GiCow
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Stack from './components/Stack'
import Contact from './components/Contact'

function App() {
  const [section,setSection] = useState(1)

  return (
    <div className="App">
      <header className="App-header">
        <div className="icon-container">
          <GiHobbitDwelling className="icon" onClick={()=>setSection(1)}/>
          <p className="menu-item">Home</p>
        </div>
        <div className="icon-container">
          <GiEvilMinion className="icon" onClick={()=>setSection(2)}/>
          <p className="menu-item">About</p>
        </div>
        <div className="icon-container">
          <GiNinjaVelociraptor className="icon" onClick={()=>setSection(3)}/>
          <p className="menu-item">Projects</p>
        </div>
        <div className="icon-container">
          <GiBattleAxe className="icon" onClick={()=>setSection(4)}/>
          <p className="menu-item">Stack</p>
        </div>
        <div className="icon-container">
          <GiCrystalBall className="icon" onClick={()=>setSection(5)}/>
          <p className="menu-item">Contact</p>
        </div>
      </header>
        {section===1 ? <Home /> : section===2 ? <About /> : section===3 ? <Projects />: section===4 ? <Stack /> : <Contact />}
    </div>
  );
}

export default App;

//chicken: https://freesound.org/s/316921/

//destroy: https://freesound.org/s/473910/

//me and tita: https://storage.googleapis.com/biomechweb/IMG_20210620_130434_528.jpg