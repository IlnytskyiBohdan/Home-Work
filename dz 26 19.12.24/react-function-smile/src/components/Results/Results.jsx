import "./Results.css";
import PropTypes from "prop-types";

const Results = ({ winner, emojis, votes }) => {
  return (
    winner && (
      <div className="results-container">
        <h2 className="results-title">Результати голосування:</h2>
        <p>Переможець:</p>
        <div className="winner-emoji">{emojis[winner]}</div>
        <p>Кількість голосів: {votes[winner]}</p>
      </div>
    )
  );
};
Results.propTypes = {
  winner: PropTypes.number,
  emojis: PropTypes.arrayOf(PropTypes.string).isRequired,
  votes: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Results;
