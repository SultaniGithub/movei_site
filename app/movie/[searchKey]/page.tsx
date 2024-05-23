
import Movies from "@/components/movies"
const singleSearchedMovie= async({params}:{params:{searchKey:string}})=>{ 
    const res= await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${params.searchKey}`)
    const movies=await res.json()
    return (
        <div className="w-full p-8">
            {
                movies && movies.results.length !=0 ?
                <Movies list={movies.results }/>

              : <div>
                <h1 className="pt-6 text-center">No Result Found!</h1>
            </div>
            }
        </div>
    )
}

export default singleSearchedMovie