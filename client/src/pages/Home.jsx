import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Article from '../pages/Article'
import Footer from './Footer'

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