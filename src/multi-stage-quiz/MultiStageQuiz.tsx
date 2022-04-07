import { useAppDispatch, useAppSelector } from "hooks";
import { useEffect } from "react";
import { QuizDisplay } from "../quiz-display";
import { actions, selectors } from "./state";

export const MultiStageQuiz: React.FC = () => {
  const dispatch = useAppDispatch();
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
  };

  return (
    <>
      <h1>Question {currentQuestionNumber}</h1>
      <QuizDisplay question={currentQuestion} />
      <button
        type="button"
        onClick={() => dispatch(actions.submitAndCheckAnswer())}
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
