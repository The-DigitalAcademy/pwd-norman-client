import React from 'react'
import '../Css/Video.css'

function Video() {
    return (
        <div className='video_container'>
            {/* <iframe src='https://assets.mixkit.co/videos/preview/mixkit-woman-drinking-wine-with-her-dog-6184-large.mp4'
                autoplay muted loop
                allow='autoplay'
                allowFullScreen
            /> */}
            <video loop autoplay="" muted>
                <source src="https://assets.mixkit.co/videos/preview/mixkit-woman-drinking-wine-with-her-dog-6184-large.mp4" type="video/mp4" />
            </video>
        </div>
    )
}
export default Video