import { createSelector } from "@reduxjs/toolkit";
import { useAppSelector } from "hooks";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "store";
import { MultiStageQuizState } from "./multiQuiz.state";

const selectQuiz = (state: RootState) => state.quiz;

type QuizSelector<ReturnType> = (state: MultiStageQuizState) => ReturnType;

const createQuizSelector = <TSelected>(fn: QuizSelector<TSelected>) =>
  createSelector(selectQuiz, fn);

export const useQuizSelector: TypedUseSelectorHook<MultiStageQuizState> = (
  selectorFn
) => useAppSelector(createSelector(selectQuiz, selectorFn));

export const selectCurrentQuestion = createQuizSelector(
  (quiz) => quiz.currrentQuestionNum
);

export default useQuizSelector;
