import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Footer from './Footer'
import '../Css/Home.css'

const Home = () => {
    return (
        <div>
            <Header />
            <Slider />

            <div className='footerHome'>
                <Footer />
            </div>

        </div>
    )
}
export default Home