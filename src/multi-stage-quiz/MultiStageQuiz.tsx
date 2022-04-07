import { useAppDispatch, useAppSelector } from "hooks";
import { useState } from "react";
import { useEffect } from "react";
import { QuizDisplay } from "../quiz-display";
import { actions, selectors } from "./state";

export const MultiStageQuiz: React.FC = () => {
  const dispatch = useAppDispatch();
  const [userAnswer, setUserAnswer] = useState<number | string>("");

  const currentQuestionNumber = useAppSelector(
    selectors.selectCurrentQuestionNum
  );
  const currentQuestion = useAppSelector((state) => state.quiz.question);
  const isUserCorrect = useAppSelector(selectors.selectIsUserCorrect);

  useEffect(() => {
    dispatch(actions.fetchQuestion());
  }, [currentQuestionNumber]);

  const handleNextQuestion = () => {
    dispatch(actions.goNextQuestion());
    setUserAnswer("");
  };

  return (
    <>
      <h1>Question {currentQuestionNumber}</h1>
      <QuizDisplay
        question={currentQuestion}
        setUserAnswer={setUserAnswer}
        userAnswer={userAnswer}
      />
      <button
        type="button"
        onClick={() => dispatch(actions.submitAndCheckAnswer(userAnswer))}
      >
        SUBMIT
      </button>
      {isUserCorrect && (
        <button type="button" onClick={handleNextQuestion}>
          Next
        </button>
      )}
    </>
  );
};
