import { useEffect, useState } from "react/cjs/react.development";
import Movie from "../components/Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=7.5&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Welcome to the Movie World</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movies.map(movie => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              sum={movie.summary}
              gen={movie.genres}
              year={movie.year}
              rating={movie.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}
