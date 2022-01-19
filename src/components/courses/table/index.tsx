import { useTable, useBlockLayout } from "react-table";
import { useSelector } from "react-redux";
import { selectCourses } from "../../../store/coursesSlice";
import { Table as TableComponent } from "../../table";
import CoursesTableHeader from "./Header";
import CoursesTableBody from "./body";
import AvatarCell from "./body/AvatarCell";
import Categories from "./body/CategoriesCell";
import NameCell from "./body/NameCell";
import EnrollmentsCell from "./body/Enrollments";
import { useMemo } from "react";
import { Course } from "../../../models/courses";

export const COLUMNS_SETTINGS = [
  {
    Header: "Image",
    accessor: "imageUrl",
    width: 80,
    Cell: AvatarCell,
  },
  { Header: "Name", accessor: "name", width: 207.5, Cell: NameCell },
  {
    Header: "Enrollments",
    accessor: "count",
    width: 207.5,
    Cell: EnrollmentsCell,
  },
  {
    Header: "Categories",
    width: 226,
    accessor: "categories",
    Cell: Categories,
  },
] as const;

function CoursesTable() {
  const courses = useSelector(selectCourses);
  const columns = useMemo(() => COLUMNS_SETTINGS, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<Course>(
      {
        columns,
        data: courses,
      },
      useBlockLayout
    );

  if (!courses) {
    return null;
  }

  return (
    <TableComponent data-testid="courses-table" {...getTableProps()}>
      <CoursesTableHeader headerGroups={headerGroups} />
      <CoursesTableBody
        {...getTableBodyProps()}
        prepareRow={prepareRow}
        rows={rows}
      />
    </TableComponent>
  );
}

export default CoursesTable;
