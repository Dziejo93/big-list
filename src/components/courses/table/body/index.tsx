import { BodyRow } from "../../../table";
import { FixedSizeList } from "react-window";
import { CSSProperties, Fragment, useCallback } from "react";
import { Row } from "react-table";
import { Course } from "../../../../models/courses";
import ContentLoader from "react-content-loader";
import { getStatusCourses } from "../../../../store/coursesSlice";
import { useSelector } from "react-redux";
import { STATUSES } from "../../../../models/statuses";

const COURSES_TABLE = { HEIGHT: 326, ITEM_HEIGHT: 82, WIDTH: 752 } as const;

interface CellsListProps {
  row: CoursesTableBodyProps["rows"][number];
}

function CellsList({ row }: CellsListProps) {
  return (
    <>
      {row.cells.map((cell) => {
        const { key } = cell.getCellProps();

        return <Fragment key={key}>{cell.render("Cell")}</Fragment>;
      })}
    </>
  );
}

interface CourseBodyRowProps {
  row: CoursesTableBodyProps["rows"][number];
  style: CSSProperties | undefined;
}

function CourseBodyRow({ row, style }: CourseBodyRowProps) {
  return (
    <BodyRow
      data-testid="courses-table-body-row"
      {...row.getRowProps({
        style,
      })}
    >
      <CellsList row={row} />
    </BodyRow>
  );
}

interface CoursesTableBodyProps {
  rows: Row<Course>[];
  prepareRow: (row: Row<Course>) => void;
}

function CoursesTableBody({ rows, prepareRow }: CoursesTableBodyProps) {
  const coursesStatus = useSelector(getStatusCourses);

  const renderRow = useCallback(
    ({ index, style }) => {
      const row = rows[index];

      if (!row) {
        return null;
      }

      prepareRow(row);

      return <CourseBodyRow style={style} row={row} />;
    },
    [prepareRow, rows]
  );

  if (coursesStatus === STATUSES.LOADING) {
    return (
      <ContentLoader
        height={COURSES_TABLE.HEIGHT - 5}
        width={COURSES_TABLE.WIDTH}
        viewBox="0 0 752 326"
      >
        <rect x="8" y="8" rx="4" ry="4" width="736" height="70" />
        <rect x="8" y="100" rx="4" ry="4" width="736" height="70" />
        <rect x="8" y="190" rx="4" ry="4" width="736" height="70" />
        <rect x="8" y="280" rx="4" ry="4" width="736" height="70" />
      </ContentLoader>
    );
  }

  if (!rows.length) {
    return <div>Empty :(</div>;
  }

  return (
    <FixedSizeList
      height={COURSES_TABLE.HEIGHT}
      width={COURSES_TABLE.WIDTH}
      itemCount={rows.length}
      itemSize={COURSES_TABLE.ITEM_HEIGHT}
    >
      {renderRow}
    </FixedSizeList>
  );
}

export default CoursesTableBody;
