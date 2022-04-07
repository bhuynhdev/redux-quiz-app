import { useAppDispatch, useAppSelector } from "hooks";
import { QuizDisplay } from "./QuizDisplay";
import { actions, selectors } from "./state";

export const MultiStageQuiz: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentQuestion = useAppSelector(selectors.selectCurrentQuestion);

  const handleNextQuestion = () => {
    dispatch(actions.goNextQuestion());
  };

  return (
    <>
      <QuizDisplay questionNumber={currentQuestion} />
      <button type="button" onClick={handleNextQuestion}>
        Next
      </button>
    </>
  );
};
