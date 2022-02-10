import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

export default function Movie({
  id,
  coverImg,
  title,
  year,
  summary,
  genres,
  movie_style,
  rating,
}) {
  if (coverImg === "") {
    return null;
  }
  return (
    <div className={styles.movie} style={movie_style}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>
            {title.length > 50 ? `${title.slice(0, 50)}...` : title}
          </Link>
        </h2>
        <h3 className={styles.movie__year}>
          {year} | {rating}{" "}
          {rating >= 8.5 ? (
            <span>⭐⭐⭐⭐⭐</span>
          ) : rating >= 8 ? (
            <span>⭐⭐⭐⭐</span>
          ) : rating >= 6 ? (
            <span>⭐⭐⭐</span>
          ) : rating >= 4 ? (
            <span>⭐⭐</span>
          ) : rating >= 2 ? (
            <span>⭐</span>
          ) : (
            <span></span>
          )}
        </h3>
        <p className={styles.movie__summary}>
          {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
        </p>
        <ul className={styles.movie_genres}>
          {genres?.map(g => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  summary: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  year: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
};
