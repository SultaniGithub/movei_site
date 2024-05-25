import Link from "next/link";
import Menu from "./menu"
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "./darkModeSwitch";
const Header=()=>{
return (
    <div className="flex justify-between max-w-6xl m-auto p-4">
        <div className="flex gap-4">
            <Menu title="home" address="/" Icon={AiFillHome} />
            <Menu title="about" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        <div className="flex items-center gap-2">
            <DarkModeSwitch/>
        <Link href="/" className="flex gap-1 items-center ">
            <span className="text-xl bg-amber-500 rounded-lg font-bold px-2 py-1">MOVIE</span>
            <span className="hidden sm:inline">Clone</span>
        </Link>
        </div>
    </div>
)
}

export default Header