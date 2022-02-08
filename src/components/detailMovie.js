import propTypes from "prop-types";

export default function DetailMovie({ img, title, desc }) {
  return (
    <div>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
}

DetailMovie.propTypes = {
  img: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  desc: propTypes.string.isRequired,
};
