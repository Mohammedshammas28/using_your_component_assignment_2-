import React from 'react'

function Likebutton(props) {
  return (
    <button onClick={props.Likebutton} className={props.likeStyle}>
      {props.likeStyle? "liked":"like"}
    
    </button>
  )
}

export default Likebutton
