import React, { useContext, useState } from 'react';
import './Login.css';
import { firebaseConfig } from '../../firebaseAuthConfig';
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider,getAuth, signInWithPopup} from "firebase/auth";
import googleLogo from '../../Assets/Icons/Group 571.png';
import logo from '../../Assets/Logo/logo.png';
import { MyContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const Login = () => {
    const [loggedUser,setLoggedUser] = useContext(MyContext);
    console.log(loggedUser)
    const history = useNavigate();
    const [user,setUser] = useState({
      email:"",
      displayName:""
    })
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

     const handleSignup = () =>{
      signInWithPopup(auth, provider)
  .then((result) => {
    const {email,displayName}= result.user;
    const user = {
      email:email,
      displayName:displayName
    }
    const newUserInfo = {...loggedUser};
    newUserInfo.email = email;
    newUserInfo.name = displayName;
    setLoggedUser(newUserInfo);
    setUser(user)
    history('/dashboard')
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
  });
     }

    return (
        <div className="text-center login-form-banner pt-5">
         <img className='pb-5' src={logo} alt="" width="200px" />
            <div className="login-form mt-5 pt-5">
                         <h4 className='fw-semibold'>Login With</h4>
                         <button onClick={handleSignup} className='pe-5 mt-4 rounded-5 pt-2 pb-2'><img src={googleLogo} width="30px" alt="" /> <span className='ms-5 pe-5 fw-semibold'>Continue With Google</span></button>
                         <p className='mt-2'>Don't have an account?<span style={{color:"#3F90FC",cursor:"pointer"}}> <u>Create an account</u> </span></p>
            </div>
        </div>
    );
};

export default Login;