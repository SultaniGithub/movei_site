import Link from "next/link"
import { ReactNode } from "react"
import { IconType } from "react-icons"

const Menu=(props:{address:string, title:string, Icon:IconType})=>{
    const { address, title, Icon}=props
    return(
        <Link href={address} className="hover:text-amber-500">
            <span className="text-2xl sm:hidden"><Icon/></span>
            <p className="text-sm hidden sm:inline uppercase">{title}</p>
        </Link>
    )
}

export default Menu