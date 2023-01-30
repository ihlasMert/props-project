import React from 'react'

function Hooks(props) {
  return (
    <div>
      <div className="con-three__p">
        <ul className="con-t">
          <li>{props.title}</li>
          <li>{props.stage}</li>
        </ul>
      </div>
    </div>
  )
}

export default Hooks
