import React, { useState, useEffect } from 'react'
import '../Css/Cart.css'
import Footer from './Footer'
import Headers from '../components/Header'
import cartManager from '../utils/cartManager';

const Cart = () => {
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState(cartManager.getCart())

  useEffect(() => {
    TotalCount();
  }, [cart]);

  const TotalCount = () => {
    let total = 0;
    for (let x = 0; x < cart.length; x++) {
      total += cart[x].price;
    }
    setTotal(total);
  };

  return (
    <div className='vh-100 d-flex flex-column'>
      <Headers />
      <div className='container flex-grow-1'>
        <ul className='w-100'>
          {cart.map((item, index) => (
            <li key={index} className='text-start list-unstyled border d-flex p-3 align-items-center      justify-content-between mb-3 bg-light shadow-sm rounded'>
              <div className='d-flex'>
                <img src={item.image} className='img-fluid mx-0 rounded' alt="" />
                <div>
                  <p className='fs-4'>{item.name}</p>
                  <p>{item.litre}</p>      
                </div>                
              </div>
              <p className='fw-normal'>{item.price}</p>
              <div onClick={()=> console.log(cartManager.removeItem(item.id))} className="btn btn-danger">Remove</div>
              
            </li>            
          ))}
          <span className="text-info">Subtotal: R{total}</span>
        </ul>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;