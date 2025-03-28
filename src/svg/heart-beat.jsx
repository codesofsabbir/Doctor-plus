import React from 'react'

function HeartBeat({color}) {
  return (
    <div>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1" 
        width="512" height="512" 
        viewBox="0 0 100 100" 
        style={{enableBackground: "new 0 0 512 512"}} 
        className="service-icon w-16 h-16"
        >
          <g>
            <path d="M95 48.26h-6.53c5.13-8.98 3.8-20.13-4.03-27.98-4.59-4.59-10.7-7.12-17.21-7.12-6.16 0-11.96 2.27-16.44 6.42-4.5-4.15-10.31-6.42-16.46-6.42-6.49 0-12.6 2.53-17.21 7.12-8.13 8.15-9.27 19.85-3.43 29H5c-.55 0-1 .45-1 1s.45 1 1 1h10.11c.59.75 1.21 1.48 1.9 2.17.03.05.07.09.11.13l32.96 32.96c.19.19.44.29.71.29s.52-.11.71-.29l32.95-32.96c.04-.04.07-.08.11-.13 1-1.01 1.87-2.08 2.65-3.19H95c.55 0 1-.45 1-1s-.45-1-1-1zM18.53 21.7c4.23-4.21 9.84-6.53 15.8-6.53 5.95 0 11.54 2.31 15.76 6.51.39.39 1.02.39 1.41 0 4.2-4.2 9.79-6.51 15.74-6.51 5.97 0 11.58 2.32 15.79 6.53 7.45 7.47 8.48 18.2 3.11 26.57h-7.16l-4.77-7.32a1 1 0 0 0-.84-.45c-.34 0-.66.17-.84.46l-4.29 6.71-6.76-19.68c-.14-.41-.56-.65-.96-.67-.43.01-.81.29-.94.71l-10.3 34.01-9.78-26.29a.996.996 0 0 0-.91-.65c-.39.02-.78.23-.94.61L31.83 49.3H16.11c-6.13-8.53-5.34-19.83 2.42-27.6zm64.51 30.42c-.04.04-.07.08-.11.13L50.79 84.42 18.62 52.25a.628.628 0 0 0-.11-.12c-.27-.27-.51-.56-.77-.85h14.73c.4 0 .76-.24.92-.61l5.1-11.9 9.95 26.73c.15.39.52.65.94.65h.03c.43-.01.8-.3.93-.71L60.6 31.56l6.43 18.71c.12.36.45.62.83.67.38.04.75-.13.96-.45l4.57-7.15 4.22 6.48a1 1 0 0 0 .84.45h6.26c-.52.63-1.07 1.26-1.67 1.85z" fill={color} />
          </g>
        </svg>
    </div>
  )
}

export default HeartBeat