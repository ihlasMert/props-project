import React from 'react'

function Header(props) {
  const title = 'React Props'
  const miniTitle = 'Advanced'
  const hours = '100 Hours'
  const skills = 'React + Javascript'
  return (
    <div>
      <div className="con-one">
        <h1 className="title_one">{title}</h1>
        <div className="con-two">
          <h3>{miniTitle}</h3>
          <h4>{hours}</h4>
          <h5>{skills}</h5>
          <p>{props.advanced}</p>
        </div>
      </div>
    </div>
  )
}

export default Header
