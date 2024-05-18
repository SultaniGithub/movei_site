"use client"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

const NavBarItem=(props:{params:string, title:string})=>{
    const {params,title}=props
    const searchParams=useSearchParams()
    const genre= searchParams.get('genre')
    return(
        <Link className={`hover:text-amber-600 font-semibold ${genre===params? "underline underline-offset-8 rounded-lg decoration-amber-600 decoration-2":""}`} href={`/?genre=${params}`}>{props.title}</Link>
    )
}
export default NavBarItem