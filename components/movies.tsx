import { log } from "console";
import { DiLaravel } from "react-icons/di";
import Card from "./card";

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

interface MoviesProps {
  list: Movie[];
}

const Movies = ({ list }: MoviesProps) => {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 m-auto max-w-6xl py-5">
      {list.map((movie, index) => (
        <Card key={movie.title} movie={movie}  />
      ))}
    </div>
  );
};

export default Movies;