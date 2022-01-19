import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Courses } from "../models/courses";
import { RootState } from "./index";
import { Statuses, STATUSES } from "../models/statuses";

interface CoursesSlice {
  data: Courses;
  status: Statuses;
}

const SLICE_NAME = "courses";
const INITIAL_STATE: CoursesSlice = {
  data: [],
  status: STATUSES.IDLE,
};

export const coursesSlice = createSlice({
  name: SLICE_NAME,
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loadCourses.pending, (state) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(loadCourses.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.SUCCESS;
      })
      .addCase(loadCourses.rejected, (state) => {
        state.data = [];
        state.status = STATUSES.ERROR;
      });
  },
});

export const loadCourses = createAsyncThunk("courses/loadCourses", async () => {
  const response = await fetch("/courses", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
});

export default coursesSlice.reducer;

export const selectCourses = (state: RootState) => {
  return state.courses.data;
};

export const getStatusCourses = (state: RootState) => {
  return state.courses.status;
};
