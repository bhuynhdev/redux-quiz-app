import { useAppDispatch, useAppSelector } from "hooks";
import { QuizDisplay } from "../quiz-display/QuizDisplay";
import { actions, selectors } from "./state";

export const MultiStageQuiz: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentQuestionNumber = useAppSelector(selectors.selectCurrentQuestion);

  const handleNextQuestion = () => {
    dispatch(actions.goNextQuestion());
  };

  return (
    <>
      <h1>Question {currentQuestionNumber}</h1>
      <QuizDisplay questionNumber={currentQuestionNumber} />
      <button type="button" onClick={handleNextQuestion}>
        Next
      </button>
    </>
  );
};
