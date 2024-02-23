const Option = ({ feedbacks, onClick }) => {
  const handleClick = (feedbackType) => {
    onClick(feedbackType);
  };

  return (
    <div>
      {Object.keys(feedbacks).map((feedbackType) => (
        <div key={feedbackType}>
          <button onClick={() => handleClick(feedbackType)}>
            {feedbackType}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Option;
