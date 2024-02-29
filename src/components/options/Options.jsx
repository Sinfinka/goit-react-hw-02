import css from "./option.module.css";

function Option({ feedbacks, onClick, totalFeedback, resetFeedback }) {
  const handleClick = (feedbackType) => {
    onClick(feedbackType);
  };

  const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

  return (
    <div className={css.conteiner}>
      {Object.keys(feedbacks).map((feedbackType) => (
        <div key={feedbackType}>
          <button className={css.btn} onClick={() => handleClick(feedbackType)}>
            {capitalize(feedbackType)}
          </button>
        </div>
      ))}
      {totalFeedback !== 0 && (
        <button className={css.btn} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}

export default Option;
