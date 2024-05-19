"use client"
const error=({error, reset}:{error:any, reset:any})=>{
return(
    <div className=" text-center mt-10">
        <h1 className="">Something went wrong.</h1>
        <p className="hover:text-amber-600" onClick={()=>reset()}>Try Again</p>
    </div>
)
}
export default error
