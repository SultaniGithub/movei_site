'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

const SearchBox=()=>{
    const [searchKey,setSearchKey]=useState("");
    const router= useRouter()
    const handleSubmit=(e:any)=>{
        e.preventDefault()
        router.push(`/search/${searchKey}`)

    }
    return(
        <div>
            <form className="flex justify-between max-w-6xl mx-auto" onSubmit={handleSubmit}>
                <input type="text" value={searchKey}  onChange={(e)=>setSearchKey(e.currentTarget.value)} placeholder="search your favorate movie here" className="w-full p-2 placeholder-gray-500 rounded-md h-14 outline-none mt-1" />
                <button className="text-amber-500 ml-2 " disabled={searchKey.length===0} >search</button>
            </form>
            
        </div>
    )
}

export default SearchBox