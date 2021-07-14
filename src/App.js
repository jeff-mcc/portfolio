import {useEffect, useState} from 'react'
import './App.css';
import {GiNinjaVelociraptor} from "react-icons/gi"
import {GiEvilMinion} from "react-icons/gi"
import {GiHobbitDwelling} from "react-icons/gi"
import {GiCrystalBall} from "react-icons/gi"
import {GiBattleAxe} from "react-icons/gi"
import {GiChicken} from "react-icons/gi"
import {GiBrickWall} from "react-icons/gi"
// possibly use: GiBullyMinion, GiChicken, GiCow
import Chicken from './Chicken.mp3'

function App() {
  const [audioBool, setAudioBool] = useState(false)
  const [audio,setAudio] = useState('')

  useEffect(()=>{
    // const audioChicken = document.getElementsByClassName("chicken")[0]
    const audioChicken = new Audio(Chicken)
    setAudio(audioChicken)
  },[])

  const handleAudio = () => {
    if(!audioBool){      
      audio.play()
    }else{
      audio.pause()
      audio.currentTime = 0;
    }
    setAudioBool(!audioBool)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <GiHobbitDwelling className="icon"/>
          <p className="menu-item">Home</p>
        </div>
        <div>
          <GiEvilMinion className="icon"/>
          <p className="menu-item">About</p>
        </div>
        <div>
          <GiNinjaVelociraptor className="icon"/>
          <p className="menu-item">Projects</p>
        </div>
        <div>
          <GiBattleAxe className="icon"/>
          <p className="menu-item">Stack</p>
        </div>
        <div>
          <GiCrystalBall className="icon"/>
          <p className="menu-item">Contact</p>
        </div>
      </header>
      <div className="body">
        This is so wizard, Ani!
        <h3 className="subtitle">You have entered the lair of...</h3>
        <h1 className="title">Jeffrey McClellan, PhD</h1>
        <div className="line"/>
        <GiChicken className="monster travel" onClick={handleAudio}/>
        <div className="wall one">
          <GiBrickWall />
          <GiBrickWall />
          <GiBrickWall />
          {/* <GiBrickWall /> */}
        </div>
        <div className="wall two">
          <GiBrickWall />
          <GiBrickWall />
          <GiBrickWall />
          {/* <GiBrickWall /> */}
        </div>
        <div className="wall three">
          <GiBrickWall />
          <GiBrickWall />
          <GiBrickWall />
          {/* <GiBrickWall /> */}
        </div>
        <h2 className="text one">Web Developer</h2>
        <h2 className="text two">Scientist</h2>
        <h2 className="text three">Husband and Father</h2>
        <div className="img-container">
          <img src="https://storage.googleapis.com/biomechweb/IMG_20210620_130434_528.jpg" alt="being goofy"></img>
        </div>
      </div>
    </div>
  );
}

export default App;

//chicken: https://freesound.org/s/316921/

//destroy: https://freesound.org/s/473910/

//me and tita: https://storage.googleapis.com/biomechweb/IMG_20210620_130434_528.jpg