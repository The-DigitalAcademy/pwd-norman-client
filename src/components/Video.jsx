import React from 'react'
import '../Css/Video.css'

function Video() {
    return (
        <div>
            <iframe src='https://www.youtube.com/embed/y6lXDn771HA?controls=0&autoplay=1&mute=1'

                allow='autoplay;'
                allowFullScreen
            />            
        </div>
    )
}

export default Video