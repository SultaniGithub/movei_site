import Image from "next/image";
import Movies from "@/components/movies";
const api_key=process.env.API_KEY
const Home = async({searchParams}:{searchParams:string})=> {
  const genre=searchParams || 'top_rated'
  const data= await fetch(`https://api.themoviedb.org/3${genre==='fetchTopRated'?'/movie/top_rated':'/trending/all/week'}?api_key=${api_key}&language=en-US&page=1`)
  const movies=await data.json()

  if(!data){
    throw new Error("Something went wrong!")
  }
  
  return (
  
     <Movies list={movies.results }/>
    
  );
}

export default Home
