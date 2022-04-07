import { createSlice } from "@reduxjs/toolkit";

import allQuizes from "quizData.json";

export interface MultiStageQuizState {
  currrentQuestionNum: number;
}

const initialState: MultiStageQuizState = {
  currrentQuestionNum: 1,
};

export const multiStageQuizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    goNextQuestion(state) {
      state.currrentQuestionNum =
        1 + (state.currrentQuestionNum % allQuizes.length);
    },
  },
});

export const actions = multiStageQuizSlice.actions;

export const multiStageQuizReducer = multiStageQuizSlice.reducer;
