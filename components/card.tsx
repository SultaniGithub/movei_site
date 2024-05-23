import Image from "next/image";
import Link from "next/link";
import { Result } from "postcss";
import { FiThumbsUp } from "react-icons/fi";
interface Movie {
    id:string;
    title: string;
    backdrop_path:string;
    poster_path:string;
    overview:string;
    name:string;
    release_date:string;
    first_air_date:string;
    vote_count:string;
  
    // Add other relevant properties here
  }
const Card=({movie}:{movie:Movie})=>{

    return(
       
        <div className="group cursor-pointer sm:hover:shadow-slate-400  sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
        <Link href={`/movie/${movie.id}`} >
            <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`} width={300} height={300} alt="movie image" className=" sm:rounded-t-lg rounded-lg w-full cursor-pointer group-hover:opacity-100 transition-opacity duration-300"></Image>
            {/* <img src={"image.jpg"} width={300} height={300} alt="movie image" className=" sm:rounded-t-lg  w-full cursor-pointer group-hover:opacity-100 transition-opacity duration-300"/> */}
        </Link >
        <div className="p-2">
            <p className="line-clamp-2">{movie.overview}</p>
            <h2 className="text-lg font-bold truncate">{movie.title || movie.name}</h2>
            <p className="flex items-center">{movie.release_date}
            <span className="h-5 ml-3 mr-1"><FiThumbsUp/></span>
            {movie.vote_count}
            </p>
        </div>
        </div>
    )
}
export default Card