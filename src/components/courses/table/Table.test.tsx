import configureStore from "redux-mock-store";
import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";

import CoursesTable, { COLUMNS_SETTINGS } from "./index";
import { MOCK_DATA } from "../../../mocks";
import { RootState } from "../../../store";
import { STATUSES } from "../../../models/statuses";

const initialState = {
  courses: {
    data: MOCK_DATA,
    status: STATUSES.IDLE,
  },
};

const mockStore = configureStore([]);

function renderComponent(initialState: Partial<RootState>) {
  const state = mockStore(initialState);

  const view = render(
    <Provider store={state}>
      <CoursesTable />
    </Provider>
  );

  return { view, state };
}

describe("testing courses table", () => {
  it("should render", () => {
    renderComponent(initialState);
  });

  it("should render header cells in correct order", async () => {
    renderComponent(initialState);
    expect(screen.getAllByTestId("courses-table-header").length).toEqual(1);

    const headerCells = screen.getAllByTestId("courses-table-header-cell");

    expect(headerCells.length).toEqual(4);

    COLUMNS_SETTINGS.forEach((column, index) =>
      expect(within(headerCells[index]).getByText(column.Header)).toBeVisible()
    );
  });

  it("should render body row with correct data", async () => {
    renderComponent(initialState);

    expect(screen.getAllByTestId("courses-table-body-row").length).toEqual(6);

    const bodyCells = screen.getAllByTestId("courses-table-body-cell");

    expect(bodyCells.length).toEqual(24);
    const avatarCell = within(bodyCells[0]).getByRole("img");
    const renderedRowData = MOCK_DATA[0];

    expect(avatarCell).toBeVisible();
    expect(avatarCell.getAttribute("src")).toStrictEqual(
      renderedRowData.imageUrl
    );

    const nameCell = within(bodyCells[1]).getByText(renderedRowData.name);

    expect(nameCell).toBeVisible();

    const enrollmentsCell = within(bodyCells[2]).getByText(
      renderedRowData.count
    );
    expect(enrollmentsCell).toBeVisible();

    expect(
      within(bodyCells[3]).getByText(renderedRowData.categories[0])
    ).toBeVisible();
    expect(
      within(bodyCells[3]).getByText(renderedRowData.categories[1])
    ).toBeVisible();
    expect(
      within(bodyCells[3]).getByText(renderedRowData.categories[2])
    ).toBeVisible();
  });

  it("should render empty table when no data", () => {
    renderComponent({
      courses: {
        data: [],
        status: STATUSES.IDLE,
      },
    });

    expect(screen.getByTestId("courses-table-header")).toBeVisible();
    expect(screen.getAllByTestId("courses-table-header-cell").length).toEqual(
      4
    );
    expect(screen.queryAllByTestId("courses-table-body-row")).toHaveLength(0);
  });
});
