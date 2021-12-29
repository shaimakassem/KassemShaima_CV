import React from "react"
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Compétences</h2>
        <Skill title="HTML" rating="5" />
        <Skill title="CSS" rating="5" />
        <Skill title="JAVASCRIPT" rating="3" />
        <Skill title="REACT" rating="2" />
        <Skill title="NODE" rating="2" />
      </div>
      <div className="skills">
        <h2 className="h2">Langues</h2>
        <Skill title="Anglais" rating="3" />
        <Skill title="Français" rating="3" />
        <Skill title="Arabe" rating="5" />
      </div>
      <Interests />
    </>
  )
}

export default Skills