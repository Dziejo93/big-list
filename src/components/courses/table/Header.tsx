import { Header, HeaderCell, HeaderRow } from "../../table";
import { HeaderGroup } from "react-table";
import { Course } from "../../../models/courses";

const COURSES_HEADER_WIDTH = "752px";

interface HeaderCellListProps {
  headerGroup: HeaderGroup<Course>;
}

function HeaderCellList({ headerGroup }: HeaderCellListProps) {
  return (
    <>
      {headerGroup.headers.map((column) => {
        const { key: columnKey, ...columnRest } = column.getHeaderProps();

        return (
          <HeaderCell
            data-testid="courses-table-header-cell"
            key={columnKey}
            {...columnRest}
          >
            {column.render("Header")}
          </HeaderCell>
        );
      })}
    </>
  );
}

interface HeaderRowsListProps {
  headerGroups: HeaderGroup<Course>[];
}

function HeaderRowsList({ headerGroups }: HeaderRowsListProps) {
  return (
    <>
      {headerGroups.map((headerGroup) => {
        const {
          key: headerGroupRestKey,
          style,
          ...headerGroupRest
        } = headerGroup.getHeaderGroupProps();

        return (
          <HeaderRow
            data-testid="courses-table-header"
            key={headerGroupRestKey}
            style={{ ...style, width: COURSES_HEADER_WIDTH }}
            {...headerGroupRest}
          >
            <HeaderCellList headerGroup={headerGroup} />
          </HeaderRow>
        );
      })}
    </>
  );
}

interface CoursesTableHeaderProps {
  headerGroups: HeaderGroup<Course>[];
}

function CoursesTableHeader({ headerGroups }: CoursesTableHeaderProps) {
  return (
    <Header>
      <HeaderRowsList headerGroups={headerGroups} />
    </Header>
  );
}

export default CoursesTableHeader;
