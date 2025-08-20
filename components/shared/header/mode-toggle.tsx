'use client';
// to use hooks we need to work with client side component.
import { useState,useEffect } from "react";
// import { DropdownMenu,DropdownMenuTrigger,DropdownMenuLabel,DropdownMenuSeparator,DropdownMenuContent,DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {SunIcon,MoonIcon} from 'lucide-react';
import { useTheme } from "next-themes";


const ModeToggle = () => {
     const [mount, setMount] = useState(false);
    const {theme, setTheme} = useTheme();

    // This effect ensures that the component is mounted before rendering the theme toggle.
   // This prevents hydration issues with Next.js.
    useEffect(()=> {
        setMount(true);
    }, []);

    if(!mount){
        return null;
    }

  return (
      <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <MoonIcon className="h-5 w-5" />
      ) : (
        <SunIcon className="h-5 w-5" />
      )}
    </Button>

  )
}

export default ModeToggle;