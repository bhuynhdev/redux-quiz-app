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
  const wrongCount = useAppSelector(selectors.selectWrongCount);
  const isUserWinner = useAppSelector(selectors.selectIsUserWinner);

  useEffect(() => {
    dispatch(actions.fetchQuestion());
  }, [currentQuestionNumber]);

  const handleNextQuestion = () => {
    dispatch(actions.goNextQuestion());
    setUserAnswer("");
  };

  const resetWholeQuiz = () => {
    dispatch(actions.reset());
    setUserAnswer("");
  };

  const NextButton = () => (
    <button type="button" onClick={handleNextQuestion}>
      Next
    </button>
  );

  const ResetButton = () => (
    <>
      <p>✨ You won ✨</p>
      <button type="button" onClick={resetWholeQuiz}>
        Reset the game
      </button>
    </>
  );

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
      <p>You WRONG: {wrongCount} times</p>
      {isUserWinner ? <ResetButton /> : isUserCorrect && <NextButton />}
    </>
  );
};
