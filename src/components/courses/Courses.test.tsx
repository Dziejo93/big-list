import { render } from "@testing-library/react";
import Courses from "./Courses";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { RootState } from "../../store";
import { STATUSES } from "../../models/statuses";
import thunk from "redux-thunk";

const initialState = {
  courses: {
    data: [],
    status: STATUSES.IDLE,
  },
};

const mockStore = configureStore([thunk]);

function renderComponent(initialState: Partial<RootState>) {
  const state = mockStore(initialState);

  const view = render(
    <Provider store={state}>
      <Courses />
    </Provider>
  );

  return { view, state };
}

describe("testing Courses Component", () => {
  it("renders", () => {
    renderComponent(initialState);
  });

  it("dispatches loadCourses on mount", () => {
    const { state } = renderComponent(initialState);

    expect(state.getActions().length).toBe(1);
    expect(state.getActions()[0].type).toStrictEqual(
      "courses/loadCourses/pending"
    );
  });
});
