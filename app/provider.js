"use client"  
import React, { useEffect,useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import {onAuthStateChanged} from 'firebase/auth'
import { auth } from "@/configs/firebaseConfig"
import {AuthContext} from '../_context/AuthContext'
import { useContext } from "react"

function Provider({children}) {
  // This is a client component

  const[user,setUser]=useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      setUser(user);
    },[]);
  
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{user}}>
          <NextThemesProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
          >
              {children}
          </NextThemesProvider>
        </AuthContext.Provider>
    </div>
  )
}
export const useAuthContext=()=>{
  const context=useContext(AuthContext);
  return context
}

export default Provider