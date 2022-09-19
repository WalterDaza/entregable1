import React from 'react'

const Element = ({randomColor}) => {

const colorElement = {
    color: randomColor
}

  return (
    <div style={colorElement} className='element_decor'>&#8220;</div>
  )
}

export default Element