import { useEffect, useState } from "react/cjs/react.development";
export default function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);

  return (
    <div>
      <h1>Welcome to the Movie World</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movies.map(movie => (
            <div key={movie.id}>
              {movie.title}
              <img src={movie.small_cover_image} alt="img" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
