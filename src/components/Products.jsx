import React, { useState } from "react";
import "../Css/Products.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import Header from "./Header";
import Footer from "../pages/Footer";

function Products(props) {
  
  return (
    <>
    <Header/>
      <div className="cards-container">
        {props.item.map((menu) => {
          return (
            <div key={menu.id} className="card">
              <img src={menu.image} className="card_img" />
              <div className="card-body">
                <h5 className="card-title">{menu.name}</h5>
                <br />
                <p className="card-text">{menu.price}</p>

                <Link to={`/menu/${menu.name}`}>
                  <Button>Chart</Button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
      <Footer/>
    </>
  );
}

export default Products;
