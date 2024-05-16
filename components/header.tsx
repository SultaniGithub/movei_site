import Link from "next/link";
import Menu from "./menu"
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
const Header=()=>{
return (
    <div className="flex justify-between max-w-6xl m-auto p-4">
        <div className="flex gap-4">
            <Menu title="home" address="/" Icon={AiFillHome} />
            <Menu title="about" address="/about" Icon={BsFillInfoCircleFill} />
        </div>
        <Link href="/" className="flex gap-1 items-center ">
            <span className="bg-amber-500 rounded-lg font-bold px-2 py-1">IDMB</span>
            <span className="hidden sm:inline">Clone</span>
        </Link>
    </div>
)
}

export default Header