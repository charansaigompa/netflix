import Header from "./Header";
import { useState,useRef } from "react";
import { checkValidateData } from "../utils/validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser, removeUser } from '../utils/userSlice'
import { ProfileIMG } from "../utils/constants";

//import { createUserWithEmailAndPassword } from "firebase/auth";
//import {auth} from "../utils/firebase"

const Login=()=>{
  const[isSigninForm,setIsSigninForm]=useState(true);
  const[errorMess,setErrorMess]=useState(null);
  const email=useRef(null)
  const password=useRef(null);
  const name=useRef(null)
  const dispatch=useDispatch()
  
  const handleSingin=()=>{
    setIsSigninForm(!isSigninForm);
    setErrorMess(null)
  }
  const handleButtonClick=()=>{
    
   const message= checkValidateData(email.current.value,password.current.value);
    setErrorMess(message);
    if(message) return;
    // Sign In SignUP logic
    if(!isSigninForm){
      //Sign Up logic
    
createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
  displayName: name.current.value, photoURL:ProfileIMG
}).then(() => {
  // Profile updated!
  const {uid,email,displayName,photoURL} = auth.currentUser;
  dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
  
}).catch((error) => {
  // An error occurred
  setErrorMess(error.message)
});

   
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMess(errorCode+"-"+errorMessage)
    // ..
  });
    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
 
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMess(errorCode+"-"+errorMessage)
  });
    }
   
  }

    return(
        <div>
          <Header/>
          <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/29b665f6-0a62-4745-b9c2-f617fb7eadc6/web/IN-en-20251208-TRIFECTA-perspective_c78aea89-8f13-4e2c-ba7a-f9b40f53bf8c_small.jpg" alt="img" />
          </div>
          <form action="" onSubmit={(e)=>e.preventDefault()} className="bg-black/80 px-18 py-10 text-white w-4/12 absolute my-36 mx-auto left-0 right-0 rounded-md ">
            <h1 className="font-bold text-3xl py-4">{isSigninForm?"Sign In":"Sign Up"}</h1>
             {
              !isSigninForm&&( <input type="text" ref={name}
            className="w-full p-3.5 my-4 bg-gray-600/60 rounded-sm"
             placeholder="Full Name" />)
             }
            <input type="text" 
            ref={email}
            className="w-full p-3.5 my-4 bg-gray-600/60 rounded-sm"
             placeholder="Email" />
            

            <input  
            type="password"
            ref={password}
            className="w-full p-3.5 my-4 bg-gray-600/60 rounded-sm" 
            placeholder="Password" />
             {
              !isSigninForm&&( <input type="text" 
            className="w-full p-3.5 my-4 bg-gray-600/60 rounded-sm"
             placeholder="Confirm  Password" />)
             }
             <p className="text-amber-700 text-lg">{errorMess}</p>
            <button className="p-2 w-full my-6 bg-amber-700 rounded-sm" onClick={handleButtonClick}>{isSigninForm?"Sign In":"Sign Up"}</button>
            <p onClick={handleSingin} className="cursor-pointer">{isSigninForm?"New to Netflix? Sign Up Now":"Already registered? Sign In"}</p>
          </form>
        </div>
    )
}
export default Login;