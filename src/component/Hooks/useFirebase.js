import { getAuth, signOut, GoogleAuthProvider , signInWithPopup , onAuthStateChanged ,createUserWithEmailAndPassword , updateProfile , SignIn,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthenticationInit from "../firebase/firebase.init"
firebaseAuthenticationInit();

const useFirebase = () =>{
  const [user , setUser] = useState({});
  const [loading , setLoading] = useState(true);



  // auth
  const auth = getAuth();

  // CreateUser
  const signUp = (name , email , pass , history) =>{
    console.log(name)
    setLoading(true);
    createUserWithEmailAndPassword(auth , email , pass)
    .then(result =>{
      console.log(result)
      setUser({displayName: name , email: email })
      updateuser(name)
      setUserDatabase('post' , name , email)
      history.push(`/home`)
    }).catch(error =>{ 
      console.log(error)
    }).finally(()=>{
      setLoading(false)
    })
  }
  

 // UpdateProfile
 const updateuser =(name)=>{
  updateProfile(auth.currentUser ,{
     displayName: name
  })
 }


  // Login user
  const logIn = (email , password , history , locationis) =>{
    setLoading(true)
    signInWithEmailAndPassword(auth , email , password)
    .then(result =>{
      console.log(result)
      history.push(locationis)
    })
    .catch(error =>{
      console.log(error)
    })
    .finally(()=>{
      setLoading(false)
    })
  }


  // googleProvider 
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSign = (locationis , history) =>{
    setLoading(true)
    signInWithPopup(auth , googleProvider)
    .then(result =>{
      const user = result.user;
      setUserDatabase("PUT" , user.displayName, user.email);
       history.push(locationis)
    }).catch(error => {
      console.log(error)
    }).finally(()=>{
      setLoading(false)
    })
  }

  // Logout 
  const logOut = () =>{
    setLoading(true)
     signOut(auth)
     .then(()=>{
      setUser({})
     }).catch(error =>{

     }).finally(()=>{
       setLoading(false)
     })
  }

  // userHandle
  useEffect(()=>{
 const unsubscrib = onAuthStateChanged(auth , user => {
      if(user){
        setUser(user)
      }else{
        setUser({})
      }
      setLoading(false)
    })

    return ()=> unsubscrib
  } , [])


  // set user on database 
  const setUserDatabase =(method , name , email) =>{
    const user = {name , email}
    fetch('http://localhost:5000/user' , {
      method : method,
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res=> res.json())
    .then(result => {
      console.log(result)
    })
  }
  



  return {handleGoogleSign , user , logOut , loading ,signUp ,  logIn}
}
export default useFirebase