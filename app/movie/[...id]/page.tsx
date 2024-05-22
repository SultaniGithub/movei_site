
import { log } from "console"
import Image from "next/image"
const singleMovie= async({params}:{params:{id:string}})=>{ 
    const res= await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.API_KEY}`)
    const movie=await res.json()
    return (
        <div className="w-full p-8">
            <div className="flex flex-col md:flex-row">
                <Image src={`https://image.tmdb.org/t/p/origin${movie.backdrop_path || movie.poster_path}`}
                    width={500}
                    height={300}
                    alt="movie pic"
                    className="rounded-lg"
                    style={{width:'100%', height:'100%'}}
            ></Image>
                <div className="p-2 ">
                    <h2 className="font-bold text-lg mb-3">{movie.title || movie.name}</h2>
                    <p className="mb-3 text-lg text-justify">{movie.overview}</p>
                    <p className="mb-3"> <span className="mr-1">date_released</span>{movie.release_date}</p>
                   <p className="mb-3"> {movie.vote_count}</p>
                </div>
            </div>
        </div>
    )
}

export default singleMovie