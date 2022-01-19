import coursesReducer, { loadCourses, selectCourses } from "./coursesSlice";
import store from "./index";
import { MOCK_JSON_API_DATA } from "../__mocks__";
import { deserializeResponse } from "../utils";

describe("testing courses slice", () => {
  it("state should have courses slice", () => {
    expect(store.getState().courses).toStrictEqual({ data: [] });
  });

  it("should return the initial state correctly", () => {
    expect(coursesReducer(undefined, {})).toStrictEqual({ data: [] });
  });

  describe("testing loadCourses reducer", () => {
    it("should accept data from payload", () => {
      const prevState = { data: [] };
      const mockPayload = "I'm a mooock";

      expect(coursesReducer(prevState, loadCourses(mockPayload))).toStrictEqual(
        {
          data: mockPayload,
        }
      );
    });
  });

  describe("testing selectCourses selector and data is", () => {
    describe("not present", () => {
      it("should return empty array when no data", () => {
        expect(selectCourses(store.getState())).toStrictEqual([]);
      });
    });

    describe("present", () => {
      it("should return serialized data", () => {
        store.dispatch({
          type: "courses/loadCourses",
          payload: MOCK_JSON_API_DATA,
        });

        expect(store.getState().courses.data).toStrictEqual(MOCK_JSON_API_DATA);
        expect(selectCourses(store.getState())).toStrictEqual(
          deserializeResponse(MOCK_JSON_API_DATA)
        );
      });
    });
  });
});
