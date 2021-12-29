import React from "react"
import "./User.css"
import HomeIcon from "@material-ui/icons/Home"
import PhoneIcon from "@material-ui/icons/Phone"
import MailIcon from "@material-ui/icons/Mail"
import EventIcon from "@material-ui/icons/Event"
import LocationOnIcon from "@material-ui/icons/LocationOn"

function User() {
  return (
    <div className="user">
      <img src="./images/avatar.jpg" className="user__avatar" alt="Kassem shaima" />
      <h1 className="user__name">Kassem shaima</h1>
      <p className="user__profession">Développeur Web</p>
      <div className="user__infos">
        <p className="user__info">
          <HomeIcon /> 08-impasse zitouna sidi bou said
        </p>
        <p className="user__info">
          <PhoneIcon /> <a href="tel:92493684">92493684</a>
        </p>
        <p className="user__info">
          <MailIcon /> <a href="mailto:gassemcheyma@gmail.com">gassemcheyma@gmail.com</a>
        </p>
        <p className="user__info">
          <EventIcon /> Date de naissance:06 Août 2000
        </p>
        <p className="user__info">
          <LocationOnIcon /> Lieu de naissance: Tunis
        </p>
      </div>
    </div>
  )
}

export default User
