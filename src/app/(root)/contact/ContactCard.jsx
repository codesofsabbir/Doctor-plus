import React from 'react'

function ContactCard({className = '', icon, title, first, second}) {
  return (
    <div className={`p-10 rounded-4xl flex gap-5 ${className}`}>
        <i className='text-6xl'>{icon}</i>
        <div>
            <address className='text-lg'>{title}</address>
            <h3 className='tracking-wide'>{first}</h3>
            <h3 className='tracking-wide'>{second}</h3>
        </div>
    </div>
  )
}

export default ContactCard