import React,{useState,useEffect} from "react";
import { Link} from "react-router-dom";
import './LandingPage.css';


export default function LandingPage() {

  const [userStatus,setUserStatus]=useState(false);
  const [hideButton,setHideButton]=useState(true);
  const [signIn,setSignIn]=useState(false);
  const [signUp,setSignUp]=useState(false);
  const [alert,setAlert]=useState('');

  const [signUpValues,setSignUpValues]=useState({
    username:'',
    email:'',
    password:''
  });

  const [signInValues,setSignInValues]=useState({
    email:'',
    password:''
  });

  const checkSignUp= async()=>{
   console.log(signUpValues)
   try{
    await fetch('http://localhost:8000/user/register',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    username:signUpValues.username,
    email:signUpValues.email,
    password:signUpValues.password
    })
  })
  .then((response)=>response.json())
  .then((json)=>{
    json.status && window.location.replace("http://localhost:3000/Explore/"+json.userId);
    !json.status && setAlert(json.message);
  });
   }catch(err)
  {
    console.log(err);
  }
  }

  const checkSignIn= async()=>{

    await fetch('http://localhost:8000/user/login',{
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    email:signInValues.email,
    password:signInValues.password
    })
  })
  .then((response)=>response.json())
  .then((json)=>{

    json.status && window.location.replace("http://localhost:3000/Explore/"+json.userId);
    !json.status && setAlert(json.message);
  });

  }

  const handleSignUp=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
   console.log(name);
   console.log(value);
    setSignUpValues((prevValue)=>{
        return{
          ...prevValue,[name]:value
        };
    });
  }

  const handleSignIn=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
   console.log(name);
   console.log(value);
    setSignInValues((prevValue)=>{
        return{
          ...prevValue,[name]:value
        };
    });
  }

  return (
    <div  className="LandingPage">
      <div className="AuthArea">

           { hideButton && <>
            <div className="signIn" onClick={()=>{setSignIn(true),setSignUp(false),setHideButton(false)}}>Sign In</div>
            <div className="signUp" onClick={()=>{setSignIn(false),setSignUp(true),setHideButton(false)}}>Sign Up</div>
            <Link to="/Explore/0"><div className="signIn">Explore</div></Link>
             </>
            }

            {/*Sign In Area*/}

            { signIn &&
            <div className="SignInBox">
              <div className="signInClose" onClick={()=>(setSignIn(false),setHideButton(true))}>X</div>
              <input placeholder="Email Id" name="email" onChange={(e)=>{handleSignIn(e)}} />
              <input placeholder="password" name="password" onChange={(e)=>{handleSignIn(e)}}/>
              <button type="submit" onClick={checkSignIn}>Submit</button>
              {alert && <div style={{color:"tomato"}}> * {alert}</div>}
            </div>
            }

            {/* Sign Up Area */}

            { signUp &&
            <div className="SignInBox">
              <div className="signInClose" onClick={()=>(setSignUp(false),setHideButton(true))}>X</div>
              <input placeholder="name" name="username"  onChange={(e)=>{handleSignUp(e)}}/>
              <input placeholder="Email Id" name="email"  onChange={(e)=>{handleSignUp(e)}}/>
              <input placeholder="password" name="password"  onChange={(e)=>{handleSignUp(e)}}/>
              <button type="submit" onClick={checkSignUp}>Sign Up</button>
                {alert && <div style={{color:"tomato"}}> * {alert}</div>}
            </div>
            }
      </div>
    </div>
  );
}
