import propTypes from "prop-types";

export default function detailMovie({ covImg, title, sum }) {
  return (
    <div>
      <img src={covImg} alt={title} />
      <strong>{title}</strong>
      <p>{sum}</p>
    </div>
  );
}

detailMovie.propTypes = {
  covImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  sum: propTypes.string.isRequired,
};
