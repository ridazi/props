import React from 'react'

const Props = ({name,cast,age,proffesion}:{name:string; cast:string; age:string;proffesion:string}) => {
    
  return (
    <div>
      <h1>{`hello ${name} ${cast} ${age} ${proffesion}`}</h1>
    </div>
  )
}

export default Props
