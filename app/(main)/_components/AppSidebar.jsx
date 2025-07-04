"use client";
import React from "react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { HomeIcon, LucideFileVideo, Search, WalletCards,Gem } from "lucide-react"; // Change if using a different icon library
import { usePathname } from 'next/navigation';
import {useAuthContext} from '@/app/provider'


const MenuItems = [
  {
    title: "Home",
    url: "/dashboard",
    icon: HomeIcon,
  },
  {
    title: "Create New Video",
    url: "/create-new-video",
    icon: LucideFileVideo,
  },
  {
    title: "Explore",
    url: "/explore",
    icon: Search,
  },
  {
    title: "Billing",
    url: "/billing",
    icon: WalletCards,
  },
];

function AppSidebar() {
  const path = usePathname();
  console.log(path);
  const {user} = useAuthContext();
  
  return (
    <div>
      <Sidebar>
        <SidebarHeader>
          <div>
            <div className="flex items-center gap-3 w-full justify-center">
              <Image src="/logo.svg" alt="logo" width={40} height={40} />
              <h2 className="font-bold text-2xl">Video Gen</h2>
            </div>
            <h2 className="text-lg text-gray-400 text-center mt-3">
              AI YouTube Video Generator
            </h2>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <div className="mx-3 mt-10">
              <Link href = {'./create-new-video'}>
                <Button className="w-full">+ Create New Video</Button>
              </Link>
            </div>
            <SidebarMenu>
              {MenuItems.map((menu, index) => (
                <SidebarMenuItem className="mt-3 mx-3" key={index}>
                  <SidebarMenuButton className="p-5" isActive={path == menu.url}>
                    <Link href={menu.url} className="flex gap-4 p-3 items-center">
                      <menu.icon />
                      <span>{menu.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
          <SidebarGroup />
        </SidebarContent>

        <SidebarFooter>
          <div className="p-5 border rounded-lg mb-6 bg-gray-800">
            <div className="flex items-center justify-between">
              <Gem className="text-gray-400" />
              <h2 className="text-gray-400"> {user?.credits} credits Left</h2>
            </div>
            <Button className="w-full mt-3"> Buy More Credits </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}

export default AppSidebar;
