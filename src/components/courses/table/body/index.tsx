import { BodyRow } from "../../../table";
import { FixedSizeList } from "react-window";
import { CSSProperties, Fragment, useCallback } from "react";
import { Row } from "react-table";
import { Course } from "../../../../models/courses";

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

  return (
    <FixedSizeList
      height={COURSES_TABLE.HEIGHT}
      itemCount={rows.length}
      itemSize={COURSES_TABLE.ITEM_HEIGHT}
      width={COURSES_TABLE.WIDTH}
    >
      {renderRow}
    </FixedSizeList>
  );
}

export default CoursesTableBody;
