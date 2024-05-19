import { log } from "console";
import { DiLaravel } from "react-icons/di";

interface Movie {
  title: string;
  // Add other relevant properties here
}

interface MoviesProps {
  list: Movie[];
}

const Movies = ({ list }: MoviesProps) => {
  return (
    <div>
      {list.map((movie, index) => (
        <p key={index}>{movie.title}</p>
      ))}
    </div>
  );
};

export default Movies;