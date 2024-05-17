"use client"
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DarkModeSwitch=()=>{

    const {theme,setTheme,systemTheme}=useTheme()
    const currentTheme= theme=== systemTheme ? 'system': theme
    const [mounted,setMounted]=useState(false)
    useEffect(()=>{setMounted(true)})
    
    
    return(
        <div>
           {mounted && (currentTheme==='dark'? <span className="text-xl cursor-pointer hover:text-amber-500"><div onClick={()=>setTheme('light')}><MdDarkMode   /></div></span> : <span className="text-xl cursor-pointer hover:text-amber-500"><div onClick={()=>setTheme('dark')}><CiDark/></div></span>)}
        </div>
    )
}

export default DarkModeSwitch