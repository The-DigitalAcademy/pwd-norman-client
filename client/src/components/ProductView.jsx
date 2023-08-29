import React from "react";
import data from "../Data/Data";
import { useParams } from "react-router-dom";
import Header from "./Header";
import '../Css/ProductView.css'
import Footer from "../pages/Footer";
function ProductView() {
  const { title } = useParams();
  return (
    <div className="background-Product">
      <Header />
      {data
        .filter((menu) => menu.name === title)
        .map((menu, index) => (
          <div key={index} className="card">
            <img className="card-img-top" src={menu.image}alt="Card image cap" style={{ width: '600px' }}/>
            <div className="card-body">
              <h5 className="card-title">{menu.name}</h5>
              <p className="card-text">{menu.price}</p>
              <p className="card-text">Litre:{menu.litre}</p>
            </div>
          </div>
        ))}
      <Footer />
    </div>
  );
}

export default ProductView;
