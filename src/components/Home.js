import {GiChicken} from "react-icons/gi"
import {GiBrickWall} from "react-icons/gi"
import {useEffect, useState} from 'react'
import Chicken from './Chicken.mp3'

const Home = () => {
    const [audioBool, setAudioBool] = useState(false)
    const [audio,setAudio] = useState('')

    useEffect(()=>{
        if(!audio){
          // const audioChicken = document.getElementsByClassName("chicken")[0]
          const audioChicken = new Audio(Chicken)
          setAudio(audioChicken)
        }else{
          audio.addEventListener("ended", function(){
            audio.currentTime = 0;
            setAudioBool(false)
          })
        }
    },[audio])

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
        <div className="body">
            This is so wizard, Ani!
            <h3 className="subtitle">You have entered the lair of...</h3>
            <h1 className="title">Jeffrey McClellan, PhD</h1>
            <div className="line"/>
            <div className="monster click">Click Me!</div>
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
    )
}

export default Home