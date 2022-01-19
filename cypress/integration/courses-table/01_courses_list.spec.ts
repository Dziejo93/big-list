import { CoursesListPage } from "../../support/pages/CoursesList";
import { COLUMNS_SETTINGS } from "../../../src/components/courses/table";

const COLUMN_NAMES = COLUMNS_SETTINGS.map((column) => column.Header);
describe("01 - courses - list", () => {
  const coursesListPage = new CoursesListPage();

  beforeEach(() => {
    coursesListPage.visitCoursesList();
  });

  context("courses list table", () => {
    it("is visible", () => {
      coursesListPage.tableIsVisible();
    });

    it("has correct headers", () => {
      coursesListPage.checkHeadersOrder(COLUMN_NAMES);
    });

    it("is scrollable", () => {
      coursesListPage
        .scrollTo("center")
        .checkIsHeaderVisible()
        .scrollTo("bottom");
    });
  });
});
