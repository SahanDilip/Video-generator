"use client"  
import React, { useEffect } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import {onAuthStateChanged} from 'firebase/auth'

function Provider({children}) {
  // This is a client component
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  
    return () => unsubscribe();
  }, []);

  return (
    <div>
        <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
         >
            {children}
        </NextThemesProvider>
    </div>
  )
}

export default Provider