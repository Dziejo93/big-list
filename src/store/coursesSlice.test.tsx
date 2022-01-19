import coursesReducer from "./coursesSlice";
import store from "./index";
import { STATUSES } from "../models/statuses";

describe("testing courses slice", () => {
  it("state should have courses slice", () => {
    expect(store.getState().courses).toStrictEqual({
      data: [],
      status: STATUSES.IDLE,
    });
  });

  it("should return the initial state correctly", () => {
    expect(coursesReducer(undefined, { type: "" })).toStrictEqual({
      data: [],
      status: STATUSES.IDLE,
    });
  });
});
