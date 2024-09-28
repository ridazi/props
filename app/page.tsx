import Props from "./components/props"
import React from 'react'

const home = () => {
  return (
    <div>
     <h2>this is a this props</h2>
     <Props name="Rida" cast='shaikh' age= "23" proffesion="programer"/>
     <Props name="ahsan" cast='shaikh' age= "25" proffesion="unknown"/>
     <Props name="Azan" cast='shaikh' age= "20" proffesion="student"/>
     <Props name="umer" cast='shaikh' age= "30" proffesion="engineer"/>
    </div>
  )
}

export default home
