import React from 'react'

function Diagnostic({color = "#000000"}) {
  return (
    <div>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        width="512" height="512" 
        viewBox="0 0 100 100" 
        style={{enableBackground:"new 0 0 512 512"}} 
        className="service-icon w-16 h-16">
            <g>
                <path d="M15.8 63c-.8 0-1.5.7-1.5 1.5v23c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-23c0-.9-.7-1.5-1.5-1.5zM29.7 41.7c8.5 0 15.4-6.9 15.4-15.4S38.1 11 29.7 11s-15.4 6.9-15.4 15.4 6.9 15.3 15.4 15.3zm0-27.7C36.5 14 42 19.5 42 26.4s-5.5 12.4-12.4 12.4-12.4-5.5-12.4-12.4S22.9 14 29.7 14z" fill={color} />
                <path d="M29.7 36.7c3.5 0 6.7-2.1 8-5.3.3-.8 0-1.6-.8-2-.8-.3-1.6 0-2 .8-.9 2.1-3 3.5-5.3 3.5s-4.4-1.4-5.3-3.5c-.3-.8-1.2-1.1-2-.8s-1.1 1.2-.8 2c1.5 3.2 4.7 5.3 8.2 5.3zM93.2 18.1H74.3c-1.8 0-3.3 1.5-3.3 3.3v.3c-2.1.4-3.8 2.3-3.8 4.5v6.3c0 2.2 1.6 4.1 3.8 4.5v5.1c0 1.8 1.5 3.3 3.3 3.3h10.2v9.1c0 1.9-1.5 3.4-3.4 3.4H69.3c-2.1 0-4.1.8-5.6 2.2l-1-1.1c-1.1-1.2-2.9-1.3-4.1-.3l-.2.2-8-9.1c-2.5-2.9-6.1-4.5-10-4.5H21c-9.7 0-17.5 7.9-17.5 17.5v19.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V62.8c0-8 6.5-14.5 14.5-14.5h19.4c2.9 0 5.8 1.3 7.7 3.5l8 9.1-6.3 5.5-2.4-2.7c-.9-1-2.2-1.3-3.4-.9-1.2.5-2 1.6-2 2.9v21.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V65.7s0-.1.1-.1h.1l2.3 2.7-.2.2c-1.2 1.1-1.3 2.9-.3 4.1l6.3 7.3c.5.6 1.2.9 2 1h.2c.7 0 1.4-.3 1.9-.7l.2-.2.6.7 2.5 2.8c.3.3.7.5 1.1.5s.7-.1 1-.4c.6-.5.7-1.5.1-2.1l-2.5-2.8-.3-.7 3.4-3 2.9-2.5.8.9 2.5 2.8c.3.3.7.5 1.1.5s.7-.1 1-.4c.6-.5.7-1.5.1-2.1l-2.5-2.8-.7-.8.1-.1c.6-.5.9-1.2 1-2s-.2-1.5-.7-2.1l-3.4-3.9c1-.9 2.3-1.5 3.7-1.5h11.8c3.5 0 6.4-2.9 6.4-6.4v-9.1h5.7c1.8 0 3.3-1.5 3.3-3.3V21.4c-.1-1.9-1.6-3.3-3.4-3.3zM49.3 70.7l1.2-1.1s.1 0 .1-.1l.1-.1 3.4-3 1.7 1.9 2.9 3.4 1.7 1.9-4.8 4.2zm13.4 1-.7-.8 1-.8c.6-.5.7-1.5.1-2.1-.5-.6-1.5-.7-2.1-.1l-1 .8-.9-1.1 1-.8c.6-.5.7-1.5.1-2.1-.5-.6-1.5-.7-2.1-.1l-1 .8-.7-.8 2.5-2.2c.1-.1.2-.1.3-.2l.3-.3.9-.8 2 2.2s0 .1.1.1h.1l4.2 4.8zm7.5-39.2v-6.3c0-.6.3-1.1.8-1.4v9c-.5-.2-.8-.7-.8-1.3zm23 9.9H74.3c-.2 0-.3-.1-.3-.3V41h13.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H74V21.4c0-.2.1-.3.3-.3h18.9c.2 0 .3.1.3.3V38H92c-.8 0-1.5.7-1.5 1.5S91.2 41 92 41h1.5v1.1c0 .2-.1.3-.3.3z" fill={color} />
                <path d="M84.2 23.4h-7.5c-.8 0-1.5.7-1.5 1.5v8.4c0 .8.7 1.5 1.5 1.5h7.5c.8 0 1.5-.7 1.5-1.5v-8.4c0-.8-.6-1.5-1.5-1.5zm-1.5 8.4h-4.5v-5.4h4.5zM88.2 26.5h2.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-2.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5zM88.2 30.6h2.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-2.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5zM92.2 33.2c0-.8-.7-1.5-1.5-1.5h-2.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h2.5c.8 0 1.5-.7 1.5-1.5z" fill={color} />
            </g>
        </svg>
    </div>
  )
}

export default Diagnostic