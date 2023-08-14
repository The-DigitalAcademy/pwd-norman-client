import React, { useContext, useState } from 'react'
import mycontext from '../context/mycontext'; // add MyContext
import Header from '../components/Header';
import Footer from './Footer';
import '../Css/Register.css';
import { Link } from 'react-router-dom';


function Register() {

  const { AddUser } = useContext(mycontext);

  const handleChange = (e) => {
    setData({ ...AddUser, [e.target.name]: e.target.value });
  };

  function AddUsers() {

    console.log(AddUser)

  }

  return (
    <div>
      <Header />
      <div className="RegisterBody">
        <form className="form-register">
        <h1>Register</h1>
          <div className="form-group">
            <input type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              name='email'
              defaultValue={AddUser.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <input type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name='password'
              defaultValue={AddUser.password}
              onChange={handleChange}
            />
          </div>
          <Link to= "/login"> Have account already? Login Here</Link>
          <br/>
          <button onClick={AddUser}>Register</button>
        </form>

      </div>
      <Footer />
    </div>
  )
}

export default Register