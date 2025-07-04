'use client'
import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useAuthContext } from '@/app/provider';
import Image from 'next/image';

function AppHeader() {
  const { user } = useAuthContext();
  
  return (
    <div className="p-3 flex justify-between items-center">
      <SidebarTrigger />
      <Image 
        src={user?.photoURL || '/default-user.png'} // optional fallback
        alt="user"
        width={40}
        height={40}
        className="rounded-full"
      />
    </div>
  );
}

export default AppHeader;
