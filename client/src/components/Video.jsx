import React from 'react'
import '../Css/Video.css'

function Video() {
    return (
        <div>
            <iframe src='https://assets.mixkit.co/videos/preview/mixkit-woman-drinking-wine-with-her-dog-6184-large.mp4'
                autoplay muted loop
                allow='autoplay;'
                allowFullScreen
            />            
        </div>
    )
}

export default Video