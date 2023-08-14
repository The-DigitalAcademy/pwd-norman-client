import { useContext, useState } from "react";
import '../Css/login.css'
import Header from "../components/Header";
import Footer from '../pages/Footer'
import { Link, useNavigate } from "react-router-dom";
import mycontext from "../context/mycontext";



function Login() {

  // const [data] = useContext(mycontext);
  // console.log(data.email)

  const { user, password } = useContext(mycontext)

  const [usernameT, setUsernameT] = useState('');
  const [passwordT, setPassword] = useState('');



  const navigate = useNavigate();
  console.log(user, password)


  function Login() {

    if (user == usernameT && password == passwordT) {
     alert('Login Successfully')
      navigate("/");
    }
    else {
      alert('Login Unsuccessfully')
    }
  }

  return (
    <div>
      <Header />
      <div className="LoginBody">
        <div className="row">
          <div className='col-md-offset-5 col-md-4 text-center"'>
            <h1 class="text-white">Login</h1>
            <div class="form-login">
              <br />
              <input
                type="text"
                id="userName"
                class="form-control input-sm chat-input"
                placeholder="Username"
                value={usernameT}
                onChange={e => setUsernameT(e.target.value)}
              />
              <br />
              <br />
              <input
                type="password"
                id="userPassword"
                class="form-control input-sm chat-input"
                placeholder="Password"
                value={passwordT}
                onChange={e => setPassword(e.target.value)}
              />
              <Link to='/register'>Not a member? Join Us </Link>
              <br />
              <br />
              <button onClick={Login}>Login</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
