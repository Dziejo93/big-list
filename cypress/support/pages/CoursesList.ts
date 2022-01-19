import { COLUMNS_SETTINGS } from "../../../src/components/courses/table";

export class CoursesListPage {
  selectors = {
    table: '[data-testid="courses-table"]',
    tableHeader: '[data-testid="courses-table-header"]',
    tableHeaderCell: '[data-testid="courses-table-header-cell"]',
    tableBodyRow: '[data-testid="courses-table-body-row"]',
    tableBodyCell: '[data-testid="courses-table-body-cell"]',
  };

  visitCoursesList() {
    cy.visit("/");
  }

  tableIsVisible() {
    cy.get(this.selectors.table);
    return this;
  }

  checkIsHeaderVisible() {
    cy.get(this.selectors.tableHeader);
    return this;
  }

  checkHeadersOrder(
    headersArray: Array<typeof COLUMNS_SETTINGS[number]["Header"]>
  ) {
    cy.get(this.selectors.tableHeaderCell).each((el, index) =>
      cy.wrap(el).contains(headersArray[index])
    );
    return this;
  }

  scrollTo(position: Cypress.PositionType) {
    cy.get(`${this.selectors.table}>div`).eq(1).scrollTo(position);
    return this;
  }
}
