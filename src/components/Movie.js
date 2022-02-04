import propTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Movie({ id, coverImg, title, sum, gen, year, rating }) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}> {title}</Link>
      </h2>
      <p>{sum}</p>

      <ul>
        {gen?.map(g => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>
        개봉연도: {year}년 | 평점: {rating}
      </p>
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
