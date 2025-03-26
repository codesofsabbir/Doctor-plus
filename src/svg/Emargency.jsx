import React from 'react'

function Emargency({color}) {
  return (
    <div>
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        version="1.1"
        width="512" height="512" 
        viewBox="0 0 512 512" 
        style={{enableBackground: "new 0 0 512 512"}} 
        className="svg-icon w-16 h-16">
            <g>
                <path d="M433.873 292.579c-4.041-9.515-13.329-15.426-24.24-15.426h-24.614v-13.365c0-8.028-6.532-14.561-14.561-14.561h-11.955c-8.029 0-14.561 6.532-14.561 14.561v13.365h-6.233v-23.95c0-12.386-10.077-22.463-22.463-22.463H51.241a8 8 0 0 0 0 16h264.004a6.47 6.47 0 0 1 6.463 6.463v150.191H105.73v-59.448a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h73.73v97.239c0 12.386 10.077 22.463 22.463 22.463h36.761c3.666 16.527 18.43 28.927 36.044 28.927s32.378-12.4 36.044-28.927h135.98c3.666 16.527 18.43 28.927 36.044 28.927s32.378-12.4 36.044-28.927h16.464c10.393 0 18.848-8.455 18.848-18.848v-83.57c0-3.22-.591-6.111-1.861-9.103zm-73.932-27.351h9.077v11.926h-9.077zM184.998 484.575c-11.539 0-20.927-9.388-20.927-20.927s9.388-20.927 20.927-20.927 20.927 9.388 20.927 20.927-9.388 20.927-20.927 20.927zm0-57.853c-17.614 0-32.378 12.4-36.044 28.927h-36.761a6.47 6.47 0 0 1-6.463-6.463v-29.791h215.979v36.254H221.042c-3.667-16.527-18.431-28.927-36.044-28.927zm208.068 57.853c-11.539 0-20.927-9.388-20.927-20.927s9.388-20.927 20.927-20.927 20.927 9.388 20.927 20.927-9.388 20.927-20.927 20.927zm52.508-28.926H429.11c-3.666-16.527-18.43-28.927-36.044-28.927s-32.378 12.4-36.044 28.927h-19.313V293.154h71.924c4.38 0 8.025 2.177 9.513 5.68l28.688 67.547c.429 1.011.588 1.783.588 2.85v29.675h-10.353c-7.168 0-13 5.832-13 13v21.002c0 7.169 5.832 13.001 13 13.001h10.353v6.894c0 1.542-1.304 2.846-2.848 2.846zm2.848-40.744v15.003h-7.354v-15.003zm-10.464-46.661a8.002 8.002 0 0 0 .692-7.542l-23.971-56.442a7.998 7.998 0 0 0-7.363-4.873h-55.374a8 8 0 0 0-8 8v56.442a8 8 0 0 0 8 8h79.345a7.998 7.998 0 0 0 6.671-3.585zm-78.017-12.415v-40.442h42.08l17.176 40.442zm-165.088 107.82c0 5.447-4.409 9.855-9.856 9.855s-9.855-4.408-9.855-9.855 4.408-9.855 9.855-9.855 9.856 4.408 9.856 9.855zm208.068 0c0 5.447-4.409 9.855-9.856 9.855s-9.855-4.408-9.855-9.855 4.408-9.855 9.855-9.855a9.85 9.85 0 0 1 9.856 9.855zM231.462 275.992h-35.485a8 8 0 0 0-8 8v15.332h-15.332a8 8 0 0 0-8 8v35.485a8 8 0 0 0 8 8h15.332v15.332a8 8 0 0 0 8 8h35.485a8 8 0 0 0 8-8V350.81h15.332a8 8 0 0 0 8-8v-35.485a8 8 0 0 0-8-8h-15.332v-15.332a8 8 0 0 0-8-8.001zm15.332 39.332v19.485h-15.332a8 8 0 0 0-8 8v15.332h-19.485V342.81a8 8 0 0 0-8-8h-15.332v-19.485h15.332a8 8 0 0 0 8-8v-15.332h19.485v15.332a8 8 0 0 0 8 8h15.332zm219.219-176.892a14.21 14.21 0 0 0-8.534-8.841l-23.95-8.986c-4.277-1.604-8.929-1.101-12.764 1.382l-7.126 4.616a84.603 84.603 0 0 1-13.688-11.119l-.01-.01a84.63 84.63 0 0 1-11.118-13.688l4.617-7.128c2.482-3.835 2.985-8.488 1.38-12.763l-8.986-23.949a14.21 14.21 0 0 0-8.84-8.533 14.207 14.207 0 0 0-12.194 1.524l-12.536 8.009c-8.615 5.504-12.648 15.485-10.275 25.429 5.119 21.453 16.256 41.134 32.147 56.854 15.78 15.95 35.461 27.087 56.915 32.207 1.893.452 3.787.672 5.652.671 7.929 0 15.321-3.972 19.777-10.947l8.009-12.536a14.21 14.21 0 0 0 1.524-12.192zm-23.017 16.115c-1.81 2.832-4.963 4.106-8.232 3.327-18.545-4.426-35.577-14.072-49.315-27.958-13.826-13.678-23.473-30.71-27.897-49.254-.78-3.269.495-6.423 3.327-8.233l10.729-6.854 7.926 21.123-4.748 7.331c-3.061 4.726-3.093 10.617-.083 15.377a100.586 100.586 0 0 0 13.925 17.383 100.54 100.54 0 0 0 17.395 13.937c4.759 3.008 10.651 2.976 15.376-.084l7.331-4.748 21.122 7.925zM404.033 11.425c-55.122 0-99.967 44.845-99.967 99.967s44.845 99.967 99.967 99.967S504 166.514 504 111.392s-44.845-99.967-99.967-99.967zm0 183.934c-46.3 0-83.967-37.667-83.967-83.967s37.667-83.967 83.967-83.967c46.299 0 83.967 37.667 83.967 83.967 0 46.299-37.667 83.967-83.967 83.967zM40.142 300.877h78.242a8 8 0 0 1 0 16H40.142a8 8 0 0 1 0-16zm-21.043-27.068a8 8 0 0 1 8-8h78.241a8 8 0 0 1 0 16H27.099a8 8 0 0 1-8-8zm337.381-38.956v-12.706a8 8 0 0 1 16 0v12.706a8 8 0 0 1-16 0zm45.008-.646-6.353 11.003a7.998 7.998 0 0 1-10.929 2.928 8 8 0 0 1-2.928-10.928l6.353-11.003a8 8 0 0 1 10.928-2.928 8 8 0 0 1 2.929 10.928zm.089 17.446 11.003-6.354a8 8 0 0 1 10.928 2.928 8 8 0 0 1-2.927 10.928l-11.003 6.354a7.995 7.995 0 0 1-10.928-2.928 7.998 7.998 0 0 1 2.927-10.928z" fill={color}/>
            </g>
        </svg>
    </div>
  )
}

export default Emargency