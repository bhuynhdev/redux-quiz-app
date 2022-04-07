import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "common/types/globals";

import allQuizes from "quizData.json";

export interface MultiStageQuizState {
  questionNum: number;
  question: Question | null;
  isUserCorrect: boolean;
}

const initialState: MultiStageQuizState = {
  questionNum: 1,
  question: allQuizes[0],
  isUserCorrect: false,
};

export const multiStageQuizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    fetchQuestion(state) {
      console.log("Fetching");
      return { ...state, question: allQuizes[state.questionNum - 1] };
    },
    submitAndCheckAnswer(state, action: PayloadAction<string | number>) {
      const correctAnswer = allQuizes[state.questionNum - 1].answer;
      const userAnswer = action.payload;
      if (userAnswer === correctAnswer) {
        state.isUserCorrect = true;
      }
    },
    goNextQuestion(state) {
      state.isUserCorrect = false;
      state.questionNum = 1 + (state.questionNum % allQuizes.length);
    },
  },
});

export const actions = multiStageQuizSlice.actions;

export const multiStageQuizReducer = multiStageQuizSlice.reducer;
