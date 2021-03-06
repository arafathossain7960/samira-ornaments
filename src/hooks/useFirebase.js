import initializedAuthentication from "../firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged,signOut,signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

initializedAuthentication();
const useFirebase=()=>{
    const [user, setUser]=useState({});
    const [error, setError]=useState('');
    const [createAccount,setCreateAccount]=useState('');
    const [isLoading, setIsLoading]=useState(true);
    const [admin, setAdmin]=useState(false);
    const auth = getAuth();
const createUserWithEmailPassword=(email, password, name, role)=>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
  .then(result => {
      setUser(result.user);
      setError('');
      postUserOnDatabase(email, name, role);
  })
  .catch((error) => {
      setError(error.message)
  })
  .finally(()=>{
    setIsLoading(false)
  });
  

}
// sign in with email and password
const signInUserWithEmailPassword=(email, password, location, history)=>{
  setIsLoading(true)
    signInWithEmailAndPassword(auth, email, password)
    .then((result) => {
      setUser(result.user);
      const destination = location?.state?.from || '/';
      history.push(destination);
      setError('');
    })
    .catch((error) => {
      setError(error.message);
    })
    .finally(()=>{
      setIsLoading(false)
    });
}


useEffect(()=>{
  const unsubscribe=  onAuthStateChanged(auth, (user) => {
    setIsLoading(true)
        if (user) {
        setUser(user)
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
      return ()=>unsubscribe;
},[]);

const logoutUser=()=>{
    setIsLoading(true)
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=>{
        setIsLoading(false)
      });
}
// post user on database 
const postUserOnDatabase=( email, name,  role)=>{
  const user={name:name, email:email, role:role}
  
    fetch('https://afternoon-river-42961.herokuapp.com/users',{
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
    })
    .then(res =>res.json())
    .then(data =>{
      if(data.insertedId){
        setCreateAccount('Account has been successfully created')
      }
    })
  
}

useEffect(()=>{
  fetch(`https://afternoon-river-42961.herokuapp.com/users/${user.email}`)
  .then(res =>res.json())
  .then(data => setAdmin(data))
},[user?.email])
return{
    user,
    admin,
    error,
    isLoading,
    createAccount,
    createUserWithEmailPassword,
    logoutUser,
    signInUserWithEmailPassword
}

}
export default useFirebase;