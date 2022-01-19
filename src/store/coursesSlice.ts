import { createSlice } from "@reduxjs/toolkit";
import { MOCK_DATA } from "../__mocks__";
import { Courses } from "../models/courses";
import { RootState } from "./index";

interface CoursesSlice {
  data: Courses[];
}

const SLICE_NAME = "courses";
const INITIAL_STATE: CoursesSlice = {
  data: [],
};

export const coursesSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {
    loadCourses: (state) => {
      state.data = MOCK_DATA;
    },
  },
});

export const { loadCourses } = coursesSlice.actions;

export default coursesSlice.reducer;

export const selectCourses = (state: RootState) => {
  return state.courses.data;
};
