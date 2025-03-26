import React from 'react'

function Title({title, bg = "#F0DA6A"}) {
  return (
    <span className='rounded-full px-7 py-2' style={{background: bg}}>{title}</span>
  )
}

export default Title