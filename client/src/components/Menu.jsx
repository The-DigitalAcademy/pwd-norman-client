import React from 'react'
import Products from './Products'
import '../Css/Menu.css'
import products from '../Data/Data'

function Menu() {


    return (
        <div className='background-Menu'>
          <Products item={products}/>
        </div>

    )
}

export default Menu