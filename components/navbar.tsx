import Link from "next/link"
import NavBarItem from "./navBarItem"
const NavBar=()=>{
    return(
        <div className=" flex justify-center gap-5 items-center font-medium lg:text-lg dark:bg-gray-600   bg-amber-100 h-11">
            <NavBarItem params="getTrending" title="Trending"/>
            <NavBarItem params="getTopRated" title="Top Rated"/>
        </div>
    )
}
export default NavBar