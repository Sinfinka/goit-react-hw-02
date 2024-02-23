import Description from "../description/Description";
import Option from "../options/Options";
import Feedback from "../feedback/Feedback";

import { useState, useEffect } from "react";

function App() {
  const [feedbacks, setFeedbacks] = useState(
    () =>
      JSON.parse(localStorage.getItem("feedback")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
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

  return (
    <>
      <Description />
      <Option feedbacks={feedbacks} onClick={updateFeedback} />
      <Feedback feedbacks={feedbacks} />
    </>
  );
}

export default App;
