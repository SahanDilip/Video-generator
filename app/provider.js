"use client";
import React, { useEffect, useState, useContext } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configs/firebaseConfig";
import { AuthContext } from "../_context/AuthContext";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function Provider({ children }) {
  // This is a client component

  const [user, setUser] = useState();
  const createUser = useMutation(api.users.createNewUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      setUser(user);
 
    if(user){
      const result = await createUser({
        name: user?.displayName,
        email: user?.email,
        photoURL: user?.photoURL,
      });
      console.log(result);
      setUser(result)
    }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ user }}>
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
  );
}
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  return context;
};

export default Provider;
