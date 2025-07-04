"use client";
import React, { useEffect } from 'react';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import  AppSidebar  from "./_components/AppSidebar";
import AppHeader from "./_components/AppHeader"
import {useAuthContext} from '../provider'
import {useRouter} from 'next/navigation'

function DashboardProvider({ children }) {

  const {user} = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    user && CheckUserAuthenticated();
  },[user])

  const CheckUserAuthenticated = () => {
    if(!user) {                 
        router.replace('/')
    }
  }

  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <div className="w-full">
        <AppHeader/>
          <div className='p-10'>
            {children}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}

export default DashboardProvider;
