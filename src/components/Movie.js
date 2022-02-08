import propTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

export default function Movie({ id, coverImg, title, sum, gen, year, rating }) {
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie_img} />
      <h2 className={styles.movie_title}>
        <Link to={`/movie/${id}`}> {title}</Link>
      </h2>
      <h3 className={styles.movie_year}>
        개봉연도: {year}년 | 평점: {rating}
      </h3>
      <p>{sum.length > 235 ? `${sum.slice(0, 235)}...` : sum}</p>

      <ul className={styles.movie_genres}>
        {gen?.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
}

Movie.propTypes = {
  id: propTypes.number.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  sum: propTypes.string.isRequired,
  gen: propTypes.arrayOf(propTypes.string).isRequired,
  year: propTypes.number.isRequired,
  rating: propTypes.number.isRequired,
};
