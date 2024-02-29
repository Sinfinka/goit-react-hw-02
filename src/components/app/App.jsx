import Description from "../description/Description";
import Options from "../options/Options";
import Feedback from "../feedback/Feedback";
import Notification from "./../notification/Notification";
import { useState, useEffect } from "react";
import css from "./App.module.css";

function App() {
  const [feedbacks, setFeedbacks] = useState(
    () =>
      JSON.parse(localStorage.getItem("feedback")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
  );

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const positiveFeedbacks = Math.round(
    ((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100
  );

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    setFeedbacks((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedbacks({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <div className={css.conteiner}>
      <Description />
      <Options
        feedbacks={feedbacks}
        onClick={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedbacks={feedbacks}
          positiveFeedbacks={positiveFeedbacks}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
