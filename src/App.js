import './App.css';
import {GiNinjaVelociraptor} from "react-icons/gi"
import {GiEvilMinion} from "react-icons/gi"
import {GiHobbitDwelling} from "react-icons/gi"
import {GiCrystalBall} from "react-icons/gi"
import {GiBattleAxe} from "react-icons/gi"
import {GiChicken} from "react-icons/gi"
import {GiBrickWall} from "react-icons/gi"
// possibly use: GiBullyMinion, GiChicken, GiCow

function App() {
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
        <GiChicken className="monster travel"/>
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
      </div>
    </div>
  );
}

export default App;