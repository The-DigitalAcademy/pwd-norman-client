import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Footer from './Footer'
import Article from './Article'
const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <Article/>
            <Footer/>
        </div>
    )
}
export default Home