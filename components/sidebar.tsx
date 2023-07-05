'use client';
import React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export function Sidebar() {
    return (
        <React.Fragment>
            <div className='h-full w-[11%] flex flex-col justify-center bg-[#6610F2] p-[24px] items-center'>
                <NavigationMenu className="flex-1 width-[90%] max-w-[76%] justify-start px-2" >
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Documentation
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>            
        </React.Fragment>
    );    
};