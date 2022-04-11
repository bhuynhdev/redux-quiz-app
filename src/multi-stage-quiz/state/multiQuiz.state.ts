import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Question } from "common/types/globals";

import allQuizes from "quizData.json";

export interface MultiStageQuizState {
  questionNum: number; // start at 1
  question: Question | null;
  isUserCorrect: boolean;
  isUserWinner: boolean;
  wrongCount: number;
}

const initialState: MultiStageQuizState = {
  questionNum: 1,
  question: allQuizes[0],
  isUserCorrect: false,
  isUserWinner: false,
  wrongCount: 0,
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
        state.isUserWinner = state.questionNum === allQuizes.length;
      } else {
        state.isUserCorrect = false;
        state.wrongCount++;
      }
    },
    goNextQuestion(state) {
      state.isUserCorrect = false;
      state.questionNum = 1 + (state.questionNum % allQuizes.length);
    },
    reset() {
      return initialState;
    },
  },
});

export const actions = multiStageQuizSlice.actions;

export const multiStageQuizReducer = multiStageQuizSlice.reducer;
