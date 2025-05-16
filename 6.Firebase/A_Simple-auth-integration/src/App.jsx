import './App.css'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './Firebase/firebase.init'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider).then(res => {
      console.log(res.user);
      setUser(res.user);
    })
    .catch(e => console.log("error", e));
  }

  return (
    <>
      
      <h1>Vite + React</h1>
      <button onClick={handleGoogleSignIn}> Login with Google </button>

      <div>
        {user && <div>
          <h3> User: {user.displayName} </h3>
          <p> Email: {user.email} </p>
          <img src={user.photoURL} alt="" />
        </div> }
      </div>
      
    </>
  )
}

export default App
