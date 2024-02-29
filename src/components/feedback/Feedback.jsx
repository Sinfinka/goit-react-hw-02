import css from "./feedback.module.css";

function Feedback({ feedbacks, positiveFeedbacks, totalFeedback }) {
  return (
    <ul>
      <li className={css.feedback}>Good: {feedbacks.good}</li>
      <li className={css.feedback}>Neutral: {feedbacks.neutral}</li>
      <li className={css.feedback}>Bad: {feedbacks.bad}</li>
      <li className={css.feedback}>Total: {totalFeedback}</li>
      <li className={css.feedback}>Positive: {positiveFeedbacks}%</li>
    </ul>
  );
}
export default Feedback;
