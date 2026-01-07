const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} width="150" />
      <h3>{title}</h3>
      <p>{description}</p>
      <p className="rating">⭐ {rating}</p>
    </div>
  );
};

export default MovieCard;
