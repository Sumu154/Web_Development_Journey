import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();



const AuthProvider = ( {children} ) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }


  const signInWithGoogle = () =>{
    return signInWithPopup(auth, googleProvider);
  }

  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }


  // observer set korte chai
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('current User', currentUser);
        setUser(currentUser);
        setLoading(false);
    })

    // component unmount / clean up
    return () => {
        unSubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signInUser, 
    signInWithGoogle,
    signOutUser
  }

  return (
    <AuthContext.Provider value={authInfo}>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;