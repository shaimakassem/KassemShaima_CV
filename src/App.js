import "./App.css"
import User from "./components/User"
import Skills from "./components/Skills"
import Profil from "./components/Profil"
import Cursus from "./components/FormationsExperiences"

function App() {
  return (
      <div className="App">
        <div className="grid__container">
          <div className="sidebar">
          </div>
            <User />
            <Skills />
          </div>
          <div className="main">
            <Profil />
            <Cursus/>
          </div>
        </div>

     
  )
  
}


export default App
