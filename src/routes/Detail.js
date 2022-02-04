import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react/cjs/react.development";
import detailMovie from "../components/detailMovie";

export default function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getMovie();
  }, [getMovie]);

  return (
    <div>
      <h1>Movie Detail</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {movie.map(mov => (
            <detailMovie
              covImg={mov.large_cover_image}
              title={mov.title}
              sum={mov.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}
