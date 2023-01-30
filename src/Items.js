import React from 'react'
import Hooks from './Hooks'

function Items(props) {
  return (
    <div className='con-three'>
      <Hooks title={props.items[0].title} stage={props.items[0].stage} />
      <Hooks title={props.items[1].title} stage={props.items[1].stage} />
    </div>
  )
}

export default Items
