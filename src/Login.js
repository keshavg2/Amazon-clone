import React, {useState} from 'react';
import {Link,useHistory} from 'react-router-dom';
import './Login.css';
import {auth} from './firebase.js';

function Login(){
    const history=useHistory();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const login = event =>{
        event.preventDefault();  //stops the refresh!
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
           history.push('/');
        })
        .catch(e=>alert(e.message));
    }

    const register = event =>{
        event.preventDefault();  //stops the refresh!
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
           history.push('/');
        })
        .catch((e)=>alert(e.message));
    }

   return(
       <div className="login">
       <Link to="/login">
                <img
                    className="login_logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                    alt="" 
                />
       </Link>
        <div className="login_container">
            <h1>Signin</h1>
            <form>
                <h5>Email</h5>
                <input type="email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <button type="submit" onClick={login} className="login_signinbutton">Signin</button>
                
            </form>
            <p>
                    By signing-in you agree to the AMAZON CLONE Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
            </p>
            <button className="login_registerbutton" onClick={register}>Create your amazon account</button>
        </div>
       </div>
   );
}

export default Login;